package com.app.service.Implementation;

import java.util.List;
import java.util.Optional;

import org.hibernate.annotations.common.util.impl.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.controller.CustomerController;
import com.app.dao.CustomerRepository;
import com.app.dao.NewApplicationRepository;
import com.app.dao.SavingsAccountRepository;
import com.app.entity.Customer;
import com.app.entity.NewApplication;
import com.app.entity.SavingsAccount;
import com.app.service.Interfaces.ICustomerService;
import com.app.twilio.SmsSender;

import ch.qos.logback.classic.Logger;

//Customer Service Implementation 


@Service
@Transactional
public class CustomerServiceImpl implements ICustomerService {
	
	@Autowired
	private CustomerRepository customerRepo;
	
	@Autowired
	private NewApplicationRepository repo;
	@Autowired
	private SmsSender smssend;
	@Autowired
	private SavingsAccountRepository savingsAccountRepo;
	
	 private static final org.jboss.logging.Logger Logger=LoggerFactory.logger(CustomerServiceImpl.class);
//Customer c=new Customer();
	
		@Override
		public boolean addCustomer(Customer customer) {
			Optional<Customer> optional=customerRepo.findByEmailAndMobileNo(customer.getEmail(), customer.getMobileNo());
//			System.out.println("optional of cust is "+optional);	
			
			if(!optional.isPresent())
			{
				   Logger.warn("Already User is Available");
//			
					return false;
			}
			else
				{
					
					Customer c=optional.get();
					
					c.setPassword(customer.getPassword());
					if(customerRepo.save(c) != null)
						return true;
					
					
				}
			return false;
		}

	
	
	
	@Override
	public List<Customer> getAllCustomers() {
		return customerRepo.findAll();
	}
	

	@Override
	public void deleteCustomer(int id) {
		customerRepo.deleteById(id);
	}
	
	
	@Override
	public Customer findByEmail(String email) {
		Customer c= customerRepo.findByEmail(email).get();
		return c;
	}

	@Override
	public Customer activateAccount(int id) {
		Customer c= customerRepo.findById(id).get();
		c.getSavingsAccount().setIsNetBankingActive((byte)1);
		return null;
	}
	
		@Override
		public Customer getCustomerDetails(String email, String password) {
			
		Optional<Customer> optional= customerRepo.customerAuthentication(email,password);   // calling customerrepository's method
			//Optional<Customer> optional= customerRepo.findByEmail(email); 
			if(optional.isPresent()) {
				
				return optional.get();
			}else
				return null;
		}
    
		
		@Override
		public String updateEmail(int id, String email) {
			Optional<Customer> optional=customerRepo.findById(id); 
			if(optional.isPresent())
			{
				Customer customer=optional.get();
				customer.setEmail(email);
				if(customerRepo.save(customer) != null)
				return "successfully updated email!!!";
			}
			return null;
		}

		@Override
		public String updatePassword(int id, String password) {
			Optional<Customer> optional=customerRepo.findById(id); 
			if(optional.isPresent())
			{
				Customer customer=optional.get();
				customer.setPassword(password);
				if(customerRepo.save(customer) != null) {
				
				Logger.info("password Ubdated Successfully"+customer.getPassword());
				String messege="Your KNST Bank PassWord Ubdated Successfully for" + customer.getSavingsAccount().getAccountNumber()+"...You can Login With Your New PassWord";
				smssend.sendSms(customer.getMobileNo(), messege);
			    return "successfully updated password!!!";
				}
			}
			return null;
		}
	@Override
		public String updateMobileNumber(int id, String mobileNo) {
			Optional<Customer> optional=customerRepo.findById(id); 
			if(optional.isPresent())
			{
				Customer customer=optional.get();
				customer.setMobileNo(mobileNo);
				if(customerRepo.save(customer) != null)
				return "successfully updated mobile number!!!";
			}
			return null;


}
	@Override
	public Customer getCustomer(int id) {
		
		Optional<Customer>optional= customerRepo.findById(id);
		if(optional.isPresent())
		{
			Logger.info("Customers "+optional.get());
//			System.out.println("Customer : "+ optional.get());
			return optional.get();
		}
			return null;
	}
	
	@Override
	public Customer findById(int id) {
		Customer c= customerRepo.findById(id).get();
		c.getSavingsAccount().setIsNetBankingActive((byte)1);
		return null;
	}




	@Override
	public List<NewApplication> findAll() {
		
		return repo.findAll();
	}




	@Override
	public NewApplication save(NewApplication accountopen) {
		
		return repo.save(accountopen) ;
	}




//	@Override
//	public void deleteApplication(int applicationId) {
//		repo.deleteById(int applicationId);
//		
//	}




	@Override
	public void deleteApplication(Long applicationId) {
		repo.deleteById(applicationId);
		
	}



	
	
	
	
}
