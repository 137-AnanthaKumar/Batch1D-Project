package com.app.service.Implementation;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.annotations.common.util.impl.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.controller.CustomerController;
import com.app.dao.CustomerRepository;
import com.app.dao.SavingsAccountRepository;
import com.app.dao.SavingsTransactionRepository;
import com.app.entity.SavingsAccount;
import com.app.entity.SavingsTransaction;
import com.app.service.Interfaces.ITransactionService;

@Service      				// to tell sc that this is a service class(business logic )
@Transactional
public class TransactionServiceImpl implements ITransactionService {
	@Autowired
	private SavingsAccountRepository savingsAccountRepo;
	@Autowired
	private SavingsTransactionRepository savingsTransactionRepo;
	
	@Autowired
	private CustomerRepository customerRepo;
	 private static final org.jboss.logging.Logger Logger=LoggerFactory.logger(TransactionServiceImpl.class);

	@Override
	public String betweenAccountsTransfer(int senderAccountNo, int receiverAccountNo, Double amount)
	{
		if(senderAccountNo==receiverAccountNo)
			return "Your and Beneficiary account numbers must be Different";
		SavingsAccount senderAccount=new SavingsAccount();
		SavingsAccount receiverAccount=new SavingsAccount();
		senderAccount=savingsAccountRepo.findByAccountNumber(senderAccountNo);
		receiverAccount=savingsAccountRepo.findByAccountNumber(receiverAccountNo);
		
		if(senderAccount == null || receiverAccount == null)
			return "Account not found..!! Please check account number and re-enter";
		if(senderAccount.getIsNetBankingActive() != 0)
		{
			if(senderAccount.getAccountBalance() > amount )
			{
				senderAccount.setAccountBalance(senderAccount.getAccountBalance()-amount);
				receiverAccount.setAccountBalance(receiverAccount.getAccountBalance()+amount);
				if(savingsAccountRepo.save(senderAccount) != null && savingsAccountRepo.save(receiverAccount) != null)
				{
					SavingsTransaction transaction1=new SavingsTransaction(LocalDate.now(),LocalTime.now(), "from "+senderAccountNo+" to "+receiverAccountNo+" ", "Debit", amount, senderAccount.getAccountBalance(),senderAccount);
					SavingsTransaction transaction2=new SavingsTransaction(LocalDate.now(),LocalTime.now(),"from "+receiverAccountNo +" to "+senderAccountNo+" ", "Credit", amount, receiverAccount.getAccountBalance(),receiverAccount);
					transaction1=savingsTransactionRepo.save(transaction1);
					transaction2=savingsTransactionRepo.save(transaction2);
					senderAccount.addTransaction(transaction1);
					receiverAccount.addTransaction(transaction2);
					Logger.info(" Transaction Sucessfully for "+ senderAccount+" to " +receiverAccount);
					return "Transaction done Successfully";
				}
			}
			else {
				Logger.warn("Insuffisiant Balance for"+senderAccount);
				return "Insufficient Balance ..!! Transaction failed..!!";}
			return "";
		}
		else 
			return "Your net banking is not activated !! Please Activate through your Registered Email";
	}

	@Override
	public List<SavingsTransaction> getAllTransactions() {
		return savingsTransactionRepo.findAll();
	}


}
