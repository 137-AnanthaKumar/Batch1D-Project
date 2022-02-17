package com.app.dao;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.app.entity.BillPayment;
import com.app.service.Implementation.BillPaymentServiceImpl;
import com.app.service.Interfaces.ITransactionService;

@SpringBootTest
public class BillPayHistoryTest {

	@Autowired
	BillPaymentServiceImpl billPaymentServiceImpl;
	
    @MockBean
	BillPaymentRepository billrepo;
    
    @Test
    public void saveTest() {
    	BillPayment billopen = new BillPayment();
    	billopen.setOperater("jio");
    	billopen.setPlan(199D);
    	billopen.setMobileNo("9353418724");
    	
    	when(billrepo.save(billopen)).thenReturn(billopen);
    	
    	assertEquals(billopen, billPaymentServiceImpl.save(billopen) );
    	
    }
	

}