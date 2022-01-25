package com.app.service.Interfaces;

import com.app.entity.Employee;

public interface IEmployeeService {
	Employee login(String email, String password);
	Employee getEmployee(int id);
}
