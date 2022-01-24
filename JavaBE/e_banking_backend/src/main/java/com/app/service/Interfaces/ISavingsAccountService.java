package com.app.service.Interfaces;

import com.app.pojos.SavingsAccount;

public interface ISavingsAccountService {
	
	public Boolean addAccountDetails(SavingsAccount account);
	String addSA(SavingsAccount sa);
	SavingsAccount getSavingsAccount(int accountNumber);

}
