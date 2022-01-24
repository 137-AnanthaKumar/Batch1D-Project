package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	@Query("select c from Customer c left outer join fetch c.savingsAccount where c.email=:em and c.password=:pass")
	Optional<Customer> customerAuthentication(@Param("em")String email, @Param("pass")String password); 
	
	@Query("select c from Customer c left outer join fetch c.savingsAccount where c.savingsAccount.accountNumber=:accNo")
	Optional<Customer> customerInfo(@Param("accNo")int accountNumber);
	
	Optional<Customer> findByEmailAndMobileNo(String email, String mobileNo);
	Optional<Customer> findByEmail(String email);
	


}
