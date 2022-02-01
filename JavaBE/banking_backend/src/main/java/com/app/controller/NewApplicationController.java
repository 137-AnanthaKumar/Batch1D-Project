package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.NewApplicationRepository;
import com.app.entity.NewApplication;
import com.app.service.Interfaces.ICustomerService;

@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/newapplication")
public class NewApplicationController {


	@Autowired
	private ICustomerService service;
	
	@GetMapping("/allaccounts")
	public List<NewApplication> getAllRequest(){
		return service.findAll();
	}
	
	@PostMapping("/create")
	public ResponseEntity<?> createAccount(@RequestBody NewApplication accountopen) {
		service.save(accountopen);
		return ResponseEntity.ok("Successfully Added..!");
	}
}
