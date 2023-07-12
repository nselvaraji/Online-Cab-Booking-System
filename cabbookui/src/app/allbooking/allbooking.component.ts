import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-allbooking',
  templateUrl: './allbooking.component.html',
  styleUrls: ['./allbooking.component.css']
})
export class AllbookingComponent implements OnInit {

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
    isapproved:'',
    isrejected:''
  

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

  handleApprovalChange(booking: any) {
    if (booking.isApproved) {
      alert('Your cab is approved ! It will reach u on Time !!!');
    }else if(booking.isRejected) {
      alert('Your cab is Rejected ! Book Again');
    }else{
      alert("your cab booking is in Pending state !!! Wait till admin Approve ur Cab!!!");

    }
    booking.statusChecked = true;
    
  }
  
}
