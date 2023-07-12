import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }
  public addBookingStatus(reg:any,id:any,regid:any)
  {
    
    return this.http.post(`http://localhost:9091/message/addBookingStatus/${id}/${regid}`,reg);
  }
  


}
