package com.app.dao;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.app.entity.SavingsTransaction;
import com.app.service.Implementation.TransactionServiceImpl;


@SpringBootTest
public class TransactionServiceImplTest {

	@Autowired
	TransactionServiceImpl transactionServiveImpl;

	@MockBean
	SavingsTransactionRepository savingsTransactionRepository;

	@Test
	public void getAllTransactionsTest() {
		List<SavingsTransaction> list = new ArrayList<SavingsTransaction>();
		SavingsTransaction savingsTransaction = new SavingsTransaction(1, LocalDate.now(), LocalTime.now(), "gas bill",
				"debit", 1000D, 2000D, null);
		SavingsTransaction savingsTransaction1 = new SavingsTransaction(2, LocalDate.of(2020, 01, 01), LocalTime.now(),
				"eb bill", "debit", 1000D, 2000D, null);
		list.add(savingsTransaction);
		list.add(savingsTransaction1);
		System.out.println(list);
		when(savingsTransactionRepository.findAll()).thenReturn(list);
		assertEquals(list, transactionServiveImpl.getAllTransactions());
	}

}