import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  public booking:any={

    source:'',
    destination:'',
    startDate:'',
    time:'',
    driverId:'',
    registrationId:'',
    userId:'',
    fare:'',
    distance:'',
    bookingId:''
  

  }

  
  

  constructor(private bookingService:BookingService,private regservice:RegistrationService) { }

  ngOnInit(): void {

    if(this.regservice.checkadmin()){
      console.log("inside admin")
      this.bookingService.getAllBooking().subscribe(
          (data)=>this.booking=data
       )
    }
    else{
      this.bookingService.getBookingByuserId(this.regservice.getUser().registrationId).subscribe(
        (data)=>{
          this.booking=data
          console.log(this.booking);
        }
      )
    }

    

    
    

    
  }

}
