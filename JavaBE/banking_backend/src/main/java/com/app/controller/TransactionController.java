package com.app.controller;

import org.hibernate.annotations.common.util.impl.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.TransactionDTO;
import com.app.service.Interfaces.ITransactionService;

@RestController  
@RequestMapping("/transaction")
@CrossOrigin(origins = "*")
public class TransactionController {

	@Autowired
	private ITransactionService transservics;
	
	 private static final org.jboss.logging.Logger Logger=LoggerFactory.logger(TransactionController.class);
	

	@PostMapping
	public String fundsTransfer(@RequestBody TransactionDTO transactionDTO )
	{
		Logger.info("Transaction Initial Stage for"+transactionDTO.getSenderAccountNo()+"to"+transactionDTO.getReciverAccountNo());
		return transservics.betweenAccountsTransfer(transactionDTO.getSenderAccountNo(), transactionDTO.getReciverAccountNo(), transactionDTO.getAmount());
	}

}
