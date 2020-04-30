import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'user-details-popup',
  templateUrl: './user-details-popup.component.html',
  styleUrls: ['./user-details-popup.component.css']
})
export class UserDetailsPopupComponent implements OnInit {

  @ViewChild('TABLE',{static:false})table:ElementRef;
  
  users:any =[]
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
      
      this.dataSource.data=this.users;
      console.log("DATA SOURCE"+this.dataSource.data);
      
    });
   
  }
  
 
  displayedColumns:string[]=['idUser','firstName','lastName'];
  




}
