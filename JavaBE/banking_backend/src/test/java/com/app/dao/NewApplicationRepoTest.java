//package com.app.dao;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import com.app.entity.NewApplication;
//
//class NewApplicationRepoTest {
//
//	@Autowired
//	private NewApplicationRepository repo;
//	
//	
//	@Test
//	void NewApplicationadd() {
//		NewApplication ne=new NewApplication("mr","anand","2003/12/16","anagg@gmail.com","9787878787","BSNPT6630B","234234453422");
//		repo.save(ne);
//	}
//	
//	@AfterEach
//	void tearDown(){
//        System.out.println("tearing down");
//
//	}
//
//	@Test
//	void test() {
//        System.out.println("setting up");
//
//	}
//
//}
