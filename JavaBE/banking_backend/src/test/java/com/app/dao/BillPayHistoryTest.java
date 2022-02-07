package com.app.dao;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.app.entity.BillPayment;

class BillPayHistoryTest {

	 @Autowired
	 private BillPaymentRepository reposit;
	 @Test
	void BillpaySave() {
		BillPayment bill=new BillPayment("electricity","tn",394D,"979755662","11:15","2225-11-23",34410042,34210001);
		reposit.save(bill);
	}
	
	@AfterEach
	void tearDown() {
		System.out.println("gg");
	}

	@Test
	void test() {
        System.out.println("new");
        
	}

}
