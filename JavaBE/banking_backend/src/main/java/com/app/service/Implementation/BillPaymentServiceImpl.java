package com.app.service.Implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.BillPaymentRepository;
import com.app.entity.BillPayment;
import com.app.service.Interfaces.BillPaymentService;

@Service
public class BillPaymentServiceImpl implements BillPaymentService {

	@Autowired
	private BillPaymentRepository billrepo;
	@Override
	public BillPayment save(BillPayment billopen) {
		return billrepo.save(billopen);

	}

}
