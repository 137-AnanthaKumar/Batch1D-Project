package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.SavingsTransaction;

public interface SavingsTransactionRepository extends JpaRepository<SavingsTransaction, Integer> {

}
