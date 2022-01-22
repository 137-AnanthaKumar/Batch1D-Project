package com.bank.onlinebanking.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bank.onlinebanking.entity.AccountOpening;

@Repository
public interface AccountOpeningRepo extends JpaRepository<AccountOpening , Long>{

}

