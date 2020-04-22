import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'createtablepopup',
  templateUrl: './createtablepopup.component.html',
  styleUrls: ['./createtablepopup.component.css']
})
export class CreatetablepopupComponent implements OnInit {

  @ViewChild('TABLE',{static:false})table:ElementRef;
  
  users:any =[]
  employeeInfoTable=[];
  dataSource= new MatTableDataSource(this.users)
  
  constructor(private dataService:DataserviceService) { }
  // ngOnInit(): void {
  //   this.dataService.getUserDetails().subscribe((data:[])=>{
  //     this.users=data;
  //     console.log("DATA SOURCE"+this.users);
  //   })
  ngOnInit(): void {
    this.dataService.getUserDetails().subscribe((data)=>{
      this.users=data;
      console.log("DATA SOURCE"+this.users);
      this.dataSource.data=this.users;
      
    });
   
  }
  
 
  displayedColumns:string[]=['idUser','firstName','lastName'];
  




}
