package com.app.controller;


import org.hibernate.annotations.common.util.impl.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.TransactionDTO;
import com.app.entity.BillPayment;
import com.app.service.Interfaces.BillPaymentService;
import com.app.service.Interfaces.ITransactionService;

@RestController  
@RequestMapping("/billpayment")
@CrossOrigin(origins = "*")
public class BillPaymentController {
	// private static final org.jboss.logging.Logger Logger=LoggerFactory.logger(TransactionController.class);
	private static final org.jboss.logging.Logger Logger=LoggerFactory.logger(BillPaymentController.class);
	 
	@Autowired
	private BillPaymentService billpayservice;
	
	@Autowired
	private ITransactionService transervice;


	@PostMapping("/newrequest")
	public ResponseEntity<?> createAccount(@RequestBody BillPayment billopen) {
		
		billpayservice.save(billopen);
		Logger.info("New Bill Paid for "+billopen.getOperater());
		
		TransactionDTO senderaccount=new TransactionDTO();
		senderaccount.setSenderAccountNo(billopen.getSenderAccountNo());
		senderaccount.setReciverAccountNo(billopen.getReciverAccountNo());
		senderaccount.setAmount(billopen.getPlan());
		Double amount=senderaccount.getAmount();
		int senderaccount1=senderaccount.getSenderAccountNo();
		int recieveraccount1=senderaccount.getReciverAccountNo();
		System.out.println(billopen.getSenderAccountNo());
		transervice.betweenAccountsTransfer(senderaccount1,recieveraccount1 , amount);
		Logger.info("Transaction is Successfull for "+billopen.getOperater());	
		return ResponseEntity.ok("Transaction done Successfully");
	}
	
	
}
