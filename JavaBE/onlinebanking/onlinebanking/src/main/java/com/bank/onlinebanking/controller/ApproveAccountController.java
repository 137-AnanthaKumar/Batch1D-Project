package com.bank.onlinebanking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bank.onlinebanking.entity.AccountOpening;
import com.bank.onlinebanking.entity.ApproveAccount;
import com.bank.onlinebanking.service.ApproveAccountService;

@RestController
public class ApproveAccountController {
	
	@Autowired
	private ApproveAccountService service;
	
	@GetMapping("/allRequest")
	public List<AccountOpening> getAllRequest(){
		return service.findAll();
	}
	//build create Rest api
	@PostMapping("/create")
	public AccountOpening createAccount(@RequestBody ApproveAccount aprovre) {
		return service.save(aprovre);
	}

}
