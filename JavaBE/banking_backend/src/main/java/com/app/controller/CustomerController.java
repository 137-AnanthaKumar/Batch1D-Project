package com.app.controller;

import java.util.List;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Customer;
import com.app.pojos.RegistrationFormData;
import com.app.pojos.SavingsAccount;
import com.app.pojos.SavingsTransaction;
import com.app.service.Implementation.EmailServiceImpl;
import com.app.service.Interfaces.ICustomerService;
import com.app.service.Interfaces.ISavingsAccountService;
import com.fasterxml.jackson.databind.node.ObjectNode;

@CrossOrigin
@RestController
@RequestMapping("/customer")
public class CustomerController {

	@Autowired
	private ICustomerService customerService;

	@Autowired
	private ISavingsAccountService savingsAccountService;
	@Autowired
	private EmailServiceImpl email;

	public CustomerController() {
		System.out.println("inside ctor of CustomerController " + getClass().getName());
	}

	@GetMapping("/activate/{id}")
	public ResponseEntity<?> activate(@PathVariable int id) {
		Customer c = customerService.activateAccount(id);
		System.out.println(c);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	// Login api
	@PostMapping(value = "/login", consumes = "application/json", produces = "application/json")
	public ResponseEntity<?> fetchDetails(@RequestBody Customer c) {
		Customer cust = new Customer();
		System.out.println("in fetch customer email : " + c.getEmail() + "	password : " + c.getPassword());
		if ((cust = customerService.getCustomerDetails(c.getEmail(), c.getPassword())) != null) {
			return ResponseEntity.ok(cust);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

	@PutMapping("/updateEmail/{customerId}") 
	public String updateEmail(@PathVariable int customerId , @RequestBody ObjectNode json) {// String email
		return customerService.updateEmail(customerId, json.get("email").asText());
	}

	@PutMapping("/updatePassword/{customerId}")
	public String updatePassword(@PathVariable int customerId, @RequestBody ObjectNode json) {
		return customerService.updatePassword(customerId, json.get("password").asText());
	}

	@PutMapping("/updateMobileNumber/{customerId}")
	public String updateMobileNumber(@PathVariable int customerId, @RequestBody ObjectNode json) {
		return customerService.updateMobileNumber(customerId, json.get("mobileNo").asText());
	}

	@PostMapping("/register")
	public ResponseEntity<?> insertData(@RequestBody RegistrationFormData reg) {
		Customer customer = new Customer(reg.getPassword(), reg.getEmail(), reg.getMobileNo());
		SavingsAccount sa = new SavingsAccount(reg.getAccountNumber(), reg.getBranchName(), reg.getIfscCode());
		Customer c = customerService.findByEmail(reg.getEmail());
		int i = savingsAccountService.getSavingsAccount(reg.getAccountNumber()).getIsNetBankingActive();

		if (i == (byte) 1)
			return ResponseEntity.ok("Already registered");
		else {
			try {
				email.sendMail(c);
			} catch (MessagingException e) {

				e.printStackTrace();
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}

			if (customerService.addCustomer(customer)) {
				// if(str=="Already registered")
				// return new ResponseEntity<>(HttpStatus.FOUND); // status: 302
				// else if(str=="Registered")
				return ResponseEntity.ok("Registered Succesfully..!!");
				// return ResponseEntity.ok(c); // successfully registered // status: 200
			}
		}
		// }
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	
	@GetMapping("/getProfile")
	public SavingsAccount getCustomerProfile(@RequestParam int id)
	{
		SavingsAccount s1=customerService.getCustomer(id).getSavingsAccount();
		return new SavingsAccount(s1.getAccountId(), s1.getAccountNumber(), s1.getAccountBalance(),s1.getCifNo(), s1.getBranchName(),
				s1.getIfscCode(), s1.getCustomer());
	}
	
	@GetMapping("/getTransaction/{customerId}")
	public List<SavingsTransaction> getTransactionByCustomerId(@PathVariable int customerId)
	{
		return customerService.getCustomer(customerId).getSavingsAccount().getSavingsTransactionList();
	}

}
