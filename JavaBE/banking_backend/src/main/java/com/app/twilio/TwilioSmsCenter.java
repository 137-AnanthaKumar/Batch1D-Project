package com.app.twilio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.NewApplication;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.rest.api.v2010.account.MessageCreator;
import com.twilio.type.PhoneNumber;



@Service("twilio")
public class TwilioSmsCenter implements SmsSender {
	
	 
	
	private final TwilioConfiguration twilioConfiguration;
	
	
	
	
	@Autowired
	public TwilioSmsCenter(TwilioConfiguration twilioConfiguration) {
		super();
		this.twilioConfiguration = twilioConfiguration;
	}





	@Override
	public void sendSms(String PhoneNo, String messege) {
		NewApplication newapplicationsms=new NewApplication();
		if (isPhoneNumberValid(PhoneNo)) {
            PhoneNumber to = new PhoneNumber(PhoneNo);
            PhoneNumber from = new PhoneNumber(twilioConfiguration.getTrialNumber());
           
            MessageCreator creator = Message.creator(to, from, messege);
            creator.create();
           
        } else {
            throw new IllegalArgumentException(
                    "Phone number [" + newapplicationsms.getMobile() + "] is not a valid number"
            );
        }

    }





	private boolean isPhoneNumberValid(String mobile) {
		// TODO Auto-generated method stub
		return true;
	}
		
	   

	}


