package com.app.controller;

import java.util.List;

import org.hibernate.annotations.common.util.impl.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.NewApplication;
import com.app.service.Interfaces.ICustomerService;
import com.app.twilio.SmsSender;

@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/newapplication")
public class NewApplicationController {
	private static final org.jboss.logging.Logger Logger=LoggerFactory.logger(NewApplicationController.class);

	@Autowired
	private ICustomerService service;
	
	@Autowired
	private SmsSender smssend;
	
	@GetMapping("/allaccounts")
	public List<NewApplication> getAllRequest(){
		return service.findAll();
	}
	
	@PostMapping("/create")
	public ResponseEntity<?> createAccount(@RequestBody NewApplication accountopen) {
		
		service.save(accountopen);
		Logger.info("New Account Request "+accountopen.getApplicationId());
		String messege="Hi Your Application Is Successfully Received....We Will Inform Further Details";
		
		smssend.sendSms(accountopen.getMobile(), messege);
		
		return ResponseEntity.ok("Successfully Added..!");
	}
	
	@DeleteMapping("/disapproved/{applicationId}")
	public void deleteCustomer(@PathVariable Long applicationId) {
		service.deleteApplication(applicationId);
		Logger.info("Customer Removed  "+applicationId); 
	}
	
}
