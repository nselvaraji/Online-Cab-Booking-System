import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { DriverinfoService } from '../driverinfo.service';

@Component({
  selector: 'app-cabapproval',
  templateUrl: './cabapproval.component.html',
  styleUrls: ['./cabapproval.component.css']
})
export class CabapprovalComponent implements OnInit {

  public driverapp:any=
  {
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
  public booking:any={
    distance:''
  }

  constructor(private bookservice:BookingService,private driverinfoservice:DriverinfoService,) { }

  ngOnInit(): void {
    this.bookservice.getpending().subscribe(
      (data:any)=>{
        console.log(data);
        this.driverapp=data; 
        
      },
      (Error:any)=>{
        alert(Error)
      }
    )
  }

  Reject(id:any){

    this.bookservice.rejectreq(id).subscribe(
      (data:any)=>{
        console.log("Rejected");
        window.location.reload();
        
      },
      (Error:any)=>{
        console.log("Error in approval");
      }
      
    )
  }

  Approve(id:any){
    this.bookservice.approvereq(id).subscribe(
      (data:any)=>{
        // this.driverapp.availability='Not Available';
        console.log("Approved");

        window.location.reload();
      },
      (Error:any)=>{
        console.log("Error in approval");
      }
    )
    this.driverinfoservice.editdriverinfo(id).subscribe(
      (data:any)=>{
        this.driverapp.availability='Not Available';
      },
    )
  }

}
