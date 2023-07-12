import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { DriverinfoService } from '../driverinfo.service';
import { any } from 'underscore';
@Component({
  selector: 'app-allcar',
  templateUrl: './allcar.component.html',
  styleUrls: ['./allcar.component.css']
})

export class AllcarComponent implements OnInit {
  

  public booking:any={
    driverId:'',
    
    
   }
 
  public driver:any={
    driverId:'',
    driverName:'',
    mobileNo:'',
    driverDob:'',
    driverAdharNo:'',
    driverAddress:'',
    driverLicenceNo:'',
    vehicleName:'',
    modelName:'',
    driverVehicleNo:'',
    price:'',
    availability:'',
    image:''
  }
  buttonDisabled: boolean=false;
  


  
  constructor(private driverinfoservice:DriverinfoService,private router:Router) { }
  

  ngOnInit(): void {

    this.driverinfoservice.getallDriverinfo().subscribe(
      (data)=>this.driver=data
    )
  }
 
  
  Booknow(id:any){
    
    console.log(id);
     this.router.navigate(["/firstpage/bookingform/"+id]);
    //   if(this.booking.driverId===this.driver.driverId){
    //   this.btnstate=true;
      
    //  } else{
    //  this.btnstate=false;
    //  }
   
   }
   status(){
    if (this.driver.availability=='Available'){
      this.driver.availability='Available';
    }else{
      this.driver.availability='Not Available';
      
    }
   }


}



