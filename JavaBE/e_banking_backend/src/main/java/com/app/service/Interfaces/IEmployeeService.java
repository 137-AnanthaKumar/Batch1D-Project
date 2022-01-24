package com.app.service.Interfaces;

import com.app.pojos.Employee;

public interface IEmployeeService {
	Employee login(String email, String password);
	Employee getEmployee(int id);
}
