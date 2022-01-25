package com.app.service.Interfaces;

import java.util.List;

import com.app.entity.SavingsTransaction;

public interface ITransactionService {
	String betweenAccountsTransfer(int senderAccountNo, int receiverAccountNo, Double amount);
	List<SavingsTransaction> getAllTransactions();

}
