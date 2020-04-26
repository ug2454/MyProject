import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class DataserviceService {
  url:any="http://127.0.0.1:5000";
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn')||'false')
  constructor(private httpClient: HttpClient) { }
 
  setLoggedIn(value:boolean){
    this.loggedInStatus=value
    localStorage.setItem('loggedIn','true')
  }


  get isLoggedIn(){
    return JSON.parse(localStorage.getItem('loggedIn')|| this.loggedInStatus.toString())
  }



  register(data):any{
    return this.httpClient.post(this.url+"/register",data,{responseType:'json'});
    
  }
  login(data:any){
    console.log("service",data)
    return this.httpClient.post(this.url+"/login",data,{responseType:'json'});
  }
  
  getUserDetails():any{
    return this.httpClient.get<any>(this.url);
  }

}
