package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.NewApplication;

public interface NewApplicationRepository extends JpaRepository<NewApplication ,Long>{

	NewApplicationRepository save(NewApplicationRepository accountopen);





}
