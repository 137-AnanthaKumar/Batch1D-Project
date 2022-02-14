package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.BillPayment;

@Repository
public interface BillPaymentRepository extends JpaRepository<BillPayment, Integer> {

	

}


