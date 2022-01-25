package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
	Employee findByEmailAndPassword(String email,String password);
}
