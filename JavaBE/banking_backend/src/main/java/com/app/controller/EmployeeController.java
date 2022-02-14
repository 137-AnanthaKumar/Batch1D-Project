package com.app.controller;

import java.util.List;

import org.hibernate.annotations.common.util.impl.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Customer;
import com.app.entity.Employee;
import com.app.entity.SavingsAccount;
import com.app.entity.SavingsTransaction;
import com.app.service.Interfaces.ICustomerService;
import com.app.service.Interfaces.IEmployeeService;
import com.app.service.Interfaces.ISavingsAccountService;
import com.app.service.Interfaces.ITransactionService;
import com.app.twilio.SmsSender;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/Employee")
public class EmployeeController {
	
	 private static final org.jboss.logging.Logger Logger=LoggerFactory.logger(EmployeeController.class);
	
	public EmployeeController() {
		System.out.println("inside ctor of  " + getClass().getName());
	}
	
	@Autowired
	private IEmployeeService employeeService;
	
	@Autowired
	private ICustomerService customerService;
	
	@Autowired
	private ISavingsAccountService savingsAccountService;
	
	@Autowired
	private ITransactionService transactionService;
	@Autowired
	private SmsSender smssend;
	
	
	@PostMapping("/login")
	public ResponseEntity< ?> fetchDetails(@RequestBody Employee e) {
		if((e = employeeService.login(e.getEmail(),e.getPassword())) != null)
		{
//			System.out.println("in admin login "+e);
			Logger.info("Admin: "+e.getEmail()+" Successfully Logged In");
			return ResponseEntity.ok(e); 
		}
		else {
			Employee e1=new Employee();
			Logger.warn("Admin Not Found :" +e1.getEmail());
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
//	@GetMapping("/adminProfile")
//	public ResponseEntity<?> adminProfile(@RequestParam int id)
//	{
//		Employee emp=employeeService.getEmployee(id);
//		if(emp != null)
//		{
//			return ResponseEntity.ok(emp); 
//		}
//		else {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//	}
	
	//list of customers
	@GetMapping("/customerList")
	public List<Customer> fetchAllCustomers() {
		
		return customerService.getAllCustomers();
	}
	
	//delete customer
	@DeleteMapping("/deleteCustomer/{customerId}")
	public void deleteCustomer(@PathVariable int customerId) {
		customerService.deleteCustomer(customerId);
		Logger.info("Customer Removed  "+customerId); 
	}
	
	//add account
	@PostMapping("/addAccount")
	public ResponseEntity<?> addAccountDetails(@RequestBody SavingsAccount account)
	{
		
		savingsAccountService.addAccountDetails(account);
      
		Logger.info("New Account Approved for "+account.getAccountId() +" This Account ID");
		
		String messege="HI "+account.getCustomer().getFirstName()+". Your KNST Bank Application Reguest is Approved By Admin..."
				+ "Your Account No "+account.getAccountNumber()+" and Password for NetBanking Activation is"+account.getCustomer().getIntpass();
		smssend.sendSms(account.getCustomer().getMobileNo(), messege);
		return ResponseEntity.ok("Successfully Added..!");
	}
	
	@GetMapping("/listOfTransactions")
	public List<SavingsTransaction> fetchAllTransactions()
	{
		return transactionService.getAllTransactions();
	}
}
