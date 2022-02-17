package com.app.dao;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.app.entity.NewApplication;
import com.app.service.Interfaces.ICustomerService;



@SpringBootTest
public class NewApplicationTest {

	@Autowired
	 ICustomerService customerService;
	
    @MockBean
    NewApplicationRepository repo;
    
    @Test
    public void saveTest() {
    	 NewApplication accountopen = new NewApplication();
    	 accountopen.setAadhar("3456234567895643"); 
    	 accountopen.setEmail("namratha@gmail.com");
    	 accountopen.setFullname("namratha banakar");
    	 accountopen.setMobile("9976345678");
    	 accountopen.setPan("AGd2345J");
    	 accountopen.setTitle("ms");
    	
    	when(repo.save(accountopen)).thenReturn(accountopen);
    	
    	assertEquals(accountopen, customerService.save(accountopen));
    	
    }
	

}