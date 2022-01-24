package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.SavingsAccount;

public interface SavingsAccountRepository extends JpaRepository<SavingsAccount, Integer> {
	
	Optional<SavingsAccount> findByAccountNumberAndBranchName(int accountNumber,String branchName);
	SavingsAccount findByAccountNumber(int accountNumber);

}
