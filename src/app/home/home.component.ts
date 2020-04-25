import { Component, OnInit, Input } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { LoginComponent } from '../login/login.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cookievalue:string;
  constructor(private service:DataserviceService,private cookie:CookieService) { }
  
  ngOnInit(): void {
   this.cookievalue= this.cookie.get('cookie-name')
   console.log(this.cookievalue);
  }
   


  

}
