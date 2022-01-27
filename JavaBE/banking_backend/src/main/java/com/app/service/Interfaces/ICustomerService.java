package com.app.service.Interfaces;

import java.util.List;

import com.app.entity.Customer;
import com.app.entity.NewApplication;

public interface ICustomerService {
	List<Customer> getAllCustomers();
	//contiong
	void deleteCustomer(int id);
	Customer findByEmail(String email);
	boolean addCustomer(Customer customer);
	Customer activateAccount(int id);
	Customer getCustomerDetails(String email, String password);
	
	String updateEmail(int id,String email);
	String updatePassword(int id,String password);
	String updateMobileNumber(int id,String mobileNo);
	Customer getCustomer(int id);
	Customer findById(int id);
	List<NewApplication> findAll();
	NewApplication save(NewApplication accountopen);

	
	
}
