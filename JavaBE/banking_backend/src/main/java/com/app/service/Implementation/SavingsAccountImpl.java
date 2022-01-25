package com.app.service.Implementation;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.SavingsAccountRepository;
import com.app.entity.SavingsAccount;
import com.app.service.Interfaces.ISavingsAccountService;


@Service      				// to tell sc that this is a service class(business logic )
@Transactional 
public class SavingsAccountImpl implements ISavingsAccountService {
	
	@Autowired
	private SavingsAccountRepository savingAccountRepo;
	


	@Override
	public Boolean addAccountDetails(SavingsAccount account) {
		account = savingAccountRepo.save(account);
		System.out.println("account : "+account);
		if(account != null)
		return true;
		return null;
	}

	
	// for registration
		@Override
		public String addSA(SavingsAccount sa) {
			
			Optional<SavingsAccount> optional= savingAccountRepo.findByAccountNumberAndBranchName(sa.getAccountNumber(), sa.getBranchName());
			System.out.println("optional data = "+optional);
			String str=null;
			
			if(optional.isPresent())
			{
				System.out.println("inside optional.ispresent()");
				SavingsAccount s;
				s=optional.get();
				if(s.getIsNetBankingActive()==0)
				{
//					System.out.println("inside s.getIsNetBankingActive()==0");
//					s.setIsNetBankingActive((byte) 1);
//					sar.save(s); 
//					//System.out.println(sar.save(s));
//					str="Registered";
				}
				else if(s.getIsNetBankingActive()==1)
				{
					System.out.println("inside s.getIsNetBankingActive()==1");
					str="Already registered";
				}
			}
			else
			{
				str="Account Not found";
			}
			return str;
		}

		@Override
		public SavingsAccount getSavingsAccount(int accountNumber) {
			return savingAccountRepo.findByAccountNumber(accountNumber);
		}

	
}
