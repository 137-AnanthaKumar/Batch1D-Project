package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.SavingsTransaction;

public interface SavingsTransactionRepository extends JpaRepository<SavingsTransaction, Integer> {

}
