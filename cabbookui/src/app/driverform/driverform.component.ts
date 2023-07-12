import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';
import { DriverinfoService } from '../driverinfo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-driverform',
  templateUrl: './driverform.component.html',
  styleUrls: ['./driverform.component.css']
})
export class DriverformComponent implements OnInit {
 
  public isexist=false;
  public temp=[9,10,12,15,20];
  public status=['Available','NotAvailable'];
  public driverinfo:any=
  {
    driverName:'',
    mobileNo:'',
    driverDob:'',
    driverAdharNo:'',
    driverAddress:'',
    driverLicenceNo:'',
    driverVehicleNo:'',
    vehicleName:'',
    modelName:'',
    price:'',
    availability:''
  }

  constructor(private driverinfoservice:DriverinfoService,private ar:ActivatedRoute,private router:Router,private bookservice:BookingService) { }

  ngOnInit(): void {

    //this.driverinfo=this.driverinfoservice.getallDriverinfo();
    this.driverinfo=this.driverinfoservice.getdriverbyid(this.ar.snapshot.params['id']).subscribe(
      (data:any)=>{
        this.isexist=true;
        console.log(data)
        this.driverinfo=data;
      },
      // (error:any)=>{
      //   alert(error);
      // }
    )
  }

  savedata(){
    
    console.log(this.driverinfo);
    this.driverinfoservice.addinfo(this.driverinfo).subscribe(
      
      (data:any)=>{
        alert("Data Added Successfully!");
        this.router.navigate(['/adminpage/alldriver']);
      },
      (Error:any)=>{
        console.log(Error);
        alert("Error while inserting");
      }
    )
    
  }
  
}
