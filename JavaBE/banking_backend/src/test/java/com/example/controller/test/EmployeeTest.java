package com.example.controller.test;

import static org.junit.jupiter.api.Assertions.*;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.app.entity.Employee;
import com.app.service.Interfaces.IEmployeeService;

class EmployeeTest {

	@Autowired
	private IEmployeeService servicetest;
	
	
	@Test
	void test() {
		Employee e=new Employee();
		String email="karu@gmail.com";
		String pass="234567";
		
		
//		servicetest.login(e.setEmail("karu@gmail.com"),	e.setPassword("234567"));
		
		if((e = servicetest.login(email ,pass) ) != null){
			 
			System.out.println("Test EXecuted");
	      
		}
	
	}
	
//	@PostMapping("/login")
//	public ResponseEntity<?> fetchDetails(@RequestBody Employee e) {
//		if((e = employeeService.login(e.getEmail(),e.getPassword())) != null)
//		{
////			System.out.println("in admin login "+e);
//			Logger.info("Admin: "+e.getEmail()+" Successfully Logged In");
//			return ResponseEntity.ok(e); 
//		}
//		else {
//			Employee e1=new Employee();
//			Logger.warn("Admin Not Found :" +e1.getEmail());
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//	}
}
