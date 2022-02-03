package com.app.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.BillPayment;
import com.app.service.Interfaces.BillPaymentService;

@RestController  
@RequestMapping("/billpayment")
@CrossOrigin(origins = "*")
public class BillPaymentController {
	// private static final org.jboss.logging.Logger Logger=LoggerFactory.logger(TransactionController.class);
	 
	@Autowired
	private BillPaymentService billpayservice;

	@PostMapping("/newrequest")
	public ResponseEntity<?> createAccount(@RequestBody BillPayment billopen) {
		billpayservice.save(billopen);
			
		return ResponseEntity.ok("Recharge Request Added..!");
	}
	
	
}
