package com.app.dao;

import java.util.List;

import com.app.pojos.NewApplication;

public interface NewApplicationRepository {

	List<NewApplicationRepository> findAll();

	NewApplicationRepository save(NewApplicationRepository accountopen);

}
