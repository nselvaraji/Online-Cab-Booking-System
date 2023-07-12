import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';
import { DriverinfoService } from '../driverinfo.service';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {
 
public google:any;
   
public userName:any;
public driverId:any;
public booking:any={
	 source:'',
	 destination:'',
	 startDate:'',
	 time:'',
   userId:'',
   dayscount:'',
   distance:'',
   fare:''
  }

  public driverinfo:any=
  {
    driverId:'',
    driverName:'',
    mobileNo:'',
    driverDob:'',
    driverAdharNo:'',
    driverAddress:'',
    driverLicenceNo:'',
    driverVehicleNo:'',
    vehicleName:'',
    modelName:'',
    price:''
    

  }

  constructor(private ar:ActivatedRoute,private driverinfos:DriverinfoService,private regservice:RegistrationService,private bookservice:BookingService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.ar.snapshot.params['id']);
    this.driverinfos.getdriverbyid(this.ar.snapshot.params['id']).subscribe(
      (data:any)=>{
        console.log(data);
          this.driverinfo=data;
          this.driverId=this.driverinfo.driverId;
      }
    )

    this.userName=this.regservice.getUser().userName;
  }
  calculateDiff() {
    // var date1:any = new Date(this.booking.startDate);
    // var date2:any = new Date(this.booking.endDate);
    // var diffDays:any = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
    var today=new Date().toISOString().split('T')[0];

  document.getElementsByName("startDate")[0].setAttribute('min',today);
    
    //  document.getElementsByName("endDate")[0].setAttribute('min',today);
    // this.booking.dayscount=diffDays+1;
    
}


  Bookcab(){
    
    this.booking.userId=this.regservice.getUser().registrationId;
   console.log(this.driverId)
    this.bookservice.addBooking(this.booking,this.driverId,this.booking.userId).subscribe(
      (data:any)=>{
        alert("Book Successfully!");
        alert("your cab booking is in Pending state !!! Wait till admin Approve ur Cab!!!");
        // this.router.navigate(['/firstpage/payment/'+this.driverId]);
        this.router.navigate(['/firstpage/allbooking']);
      },
      (Error:any)=>{
        alert("Error");
      }
    )
  }
  
  cancelcab(){
    alert("Cancelled Successfully!");
    this.router.navigate(['/firstpage/allcars']);
  }
  
}
