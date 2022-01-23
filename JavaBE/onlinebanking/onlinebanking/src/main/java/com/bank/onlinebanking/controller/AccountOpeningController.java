package com.bank.onlinebanking.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.onlinebanking.entity.AccountOpening;
import com.bank.onlinebanking.repo.AccountOpeningRepo;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/newaccout")
public class AccountOpeningController {

	
	@Autowired
	private AccountOpeningRepo openingrepo;
	
	@GetMapping("/allaccounts")
	public List<AccountOpening> getAllRequest(){
		return openingrepo.findAll();
	}
	//build create Rest api
	@PostMapping("/create")
	public AccountOpening createAccount(@RequestBody AccountOpening accoutopen) {
		return openingrepo.save(accoutopen);
	}
}
