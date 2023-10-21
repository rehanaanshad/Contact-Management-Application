import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  contactId:string=''// to hold the id of the contact
  contact:any=[]//to hold the contact information
  groupId:string=''//to hold the group id of the contact
  groupName:string=''
  constructor(private activatedRoute: ActivatedRoute,private api:ApiService){}
  ngOnInit(): void {
    //get id from the url
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data); //Id:"1" object
      console.log(data.Id);//1
      this.contactId=data.Id;
      //get details of particular contact
      this.api.viewContactDetails(this.contactId).subscribe((result:any)=>{
        console.log(result);//contact details - object
        this.contact=result
        this.groupId=result.GroupId
        console.log(this.groupId);

        this.api.getGroupName(this.groupId).subscribe((data:any)=>{
          console.log(data);//{"id":"1","name":"company"}

  
          this.groupName=data.name
          console.log(this.groupName);//company
        })
      })
    })
  }

}
