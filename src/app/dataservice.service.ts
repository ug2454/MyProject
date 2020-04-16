import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  url:any="http://127.0.0.1:5000";
  constructor(private httpClient: HttpClient) { }

  register(data):any{
    return this.httpClient.post(this.url+"/register",data,{responseType:'json'});
  }
  login(data:any){
    return this.httpClient.post(this.url+"/login",data,{responseType:'json'});
  }
  
}
