package com.app.service.Implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.app.pojos.Employee;
import com.app.dao.EmployeeRepository;
import com.app.service.Interfaces.IEmployeeService;

@Service
@Transactional
public class EmployeeServiceImpl implements IEmployeeService {
	
	@Autowired
	private EmployeeRepository empRepo;
	
	@Override
	public Employee login(String email, String password) {
		Employee employee= empRepo.findByEmailAndPassword(email, password);   // calling customerrepository's method
		if(employee != null)
			return employee;
		else
			return null;
	}

	@Override
	public Employee getEmployee(int id) {
		return empRepo.findById(id).get();
	}
	
	
}
	
