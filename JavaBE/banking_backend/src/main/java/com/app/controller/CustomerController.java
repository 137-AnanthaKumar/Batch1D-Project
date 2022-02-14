package com.app.controller;

import java.util.List;

import javax.mail.MessagingException;

import org.hibernate.annotations.common.util.impl.LoggerFactory;
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

import com.app.entity.Customer;
import com.app.entity.RegistrationFormData;
import com.app.entity.SavingsAccount;
import com.app.entity.SavingsTransaction;
import com.app.service.Implementation.EmailServiceImpl;
import com.app.service.Interfaces.ICustomerService;
import com.app.service.Interfaces.ISavingsAccountService;
import com.app.twilio.SmsSender;
import com.fasterxml.jackson.databind.node.ObjectNode;

import ch.qos.logback.classic.Logger;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/customer")
public class CustomerController {

	@Autowired
	private ICustomerService customerService;

	@Autowired
	private ISavingsAccountService savingsAccountService;
	@Autowired
	private EmailServiceImpl email;
	
	@Autowired
	private SmsSender smssend;
 private static final org.jboss.logging.Logger Logger=LoggerFactory.logger(CustomerController.class);
  

	@GetMapping("/activate/{id}")
	public ResponseEntity<?> activate(@PathVariable int id) {
		Customer c = customerService.activateAccount(id);
//		System.out.println(c);
		Logger.info("customer details"+c);
		
		return new ResponseEntity<>(HttpStatus.OK);
		
	}

	
	@PostMapping(value = "/login", consumes = "application/json", produces = "application/json")
	public ResponseEntity<?> fetchDetails(@RequestBody Customer c) {
	  System.out.println("pass"+c.getPassword());
//		Customer cust = new Customer();
//		System.out.println("in fetch customer email : " + c.getEmail() + "	password : " + c.getPassword());
		if ((c = customerService.getCustomerDetails(c.getEmail(), c.getPassword())) != null) {
			Logger.info("User Logged IN "+c.getEmail());
			String messege="Dear "+c.getFirstName() +"Now You Are Logedin ...SMS alert For NetBanking LOGIN";
			smssend.sendSms(c.getMobileNo(), messege);
			return ResponseEntity.ok(c);
			
		} else {
			Customer cust = new Customer();
			Logger.warn("User Not Found " +c.getEmail());
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			
			
		}

	}


	@PutMapping("/updatePassword/{customerId}")
	public String updatePassword(@PathVariable int customerId, @RequestBody ObjectNode json) {
		Logger.info("Password Ubdated");
		String c=customerService.updatePassword(customerId, json.get("password").asText());
		
		return c;
	}

//	@PutMapping("/updateMobileNumber/{customerId}")
//	public String updateMobileNumber(@PathVariable int customerId, @RequestBody ObjectNode json) {
//		return customerService.updateMobileNumber(customerId, json.get("mobileNo").asText());
//	}

	@PostMapping("/register")
	public ResponseEntity<?> insertData(@RequestBody RegistrationFormData reg) {
		Customer customer = new Customer(reg.getPassword(), reg.getEmail(), reg.getMobileNo());
		SavingsAccount sa = new SavingsAccount(reg.getAccountNumber(), reg.getBranchName(), reg.getIfscCode());
		Customer c = customerService.findByEmail(reg.getEmail());
		int i = savingsAccountService.getSavingsAccount(reg.getAccountNumber()).getIsNetBankingActive();

		if (i == (byte) 1)
			return ResponseEntity.ok("Already registered");
		else if(i == (byte) 0){
//			try {
//				email.sendMail(c);
//			} catch (MessagingException e) {
//
//				e.printStackTrace();
//				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//			}
			savingsAccountService.addSA(sa);
			Logger.info("NetBanking Activation Completed for "+customer.getEmail());
			c=customerService.getCustomerDetails(reg.getEmail(),reg.getPassword());
			String messege="Hi "+c.getFirstName()+" Your Net Banking is activated ..Now You Can Make Transaction...Your Account NO:"+reg.getAccountNumber();
			smssend.sendSms(customer.getMobileNo(), messege);
			
			return ResponseEntity.ok("Registered Succesfully..!!");
			
			

//			if (customerService.addCustomer(customer)) {
//				 if(str=="Already registered")
//				 return new ResponseEntity<>(HttpStatus.FOUND); // status: 302
//				 else if(str=="Registered")
//				
//				// return ResponseEntity.ok(c); // successfully registered // status: 200
//			}
	}
		// }
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
		
	
	@GetMapping("/getProfile/{customerId}")
	public SavingsAccount getCustomerProfile(@PathVariable int id)
	{
		SavingsAccount s1=customerService.getCustomer(id).getSavingsAccount();
		Logger.info(" Got A User Profile "+s1.getAccountId() +s1.getAccountNumber()+  s1.getAccountBalance());
		return new SavingsAccount(s1.getAccountId(), s1.getAccountNumber(), s1.getAccountBalance(),s1.getCifNo(), s1.getBranchName(),
				s1.getIfscCode(), s1.getCustomer());
	}
	
	@GetMapping("/getTransaction/{customerId}")
	public List<SavingsTransaction> getTransactionByCustomerId(@PathVariable int customerId)
	
	{
		Logger.info(" Got Transaction Details ");
		return customerService.getCustomer(customerId).getSavingsAccount().getSavingsTransactionList();
	}

}
