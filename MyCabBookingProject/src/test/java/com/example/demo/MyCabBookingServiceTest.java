package com.example.demo;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.client.RestTemplate;

import com.cabbook.controller.*;
import com.cabbook.model.*;


@SpringBootTest(classes=Booking.class)

public class MyCabBookingServiceTest {
	@Test

	void testGetBooking() {
		RestTemplate restTemplate = new RestTemplate();
		Registration booking = restTemplate.getForObject("http://localhost:9091/register/findById/2",Registration.class);
		assertNotNull(booking);
	}
	@Test
	void testGetDriver() {
		RestTemplate resttemplate = new RestTemplate();
		DriverInfo driver = resttemplate.getForObject("http://localhost:9091/driver/findDriverInfoById/3", DriverInfo.class);
		assertNotNull(driver);
	}
}
