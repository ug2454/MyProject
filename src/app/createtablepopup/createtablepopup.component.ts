import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'createtablepopup',
  templateUrl: './createtablepopup.component.html',
  styleUrls: ['./createtablepopup.component.css']
})
export class CreatetablepopupComponent implements OnInit {

  constructor(private dataService:DataserviceService) { }
  users=[]
  ngOnInit(): void {
    this.dataService.getUserDetails().subscribe((data:any[])=>{
      console.log(data)
      this.users=data;
      console.log(this.users);
    })
  }



}
