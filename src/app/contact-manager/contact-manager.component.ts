import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/model/myContact';




@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
    searchkey:string=''

  loginDate:any;//to hold system current date
  //url:string='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png'
    
    //to hold contact details
    allContacts:any=[];
    heading:string='Contact Details List';

  //api dependency injection
  constructor(private api:ApiService){
    this.loginDate=new Date();
  }
  
  
  ngOnInit(): void {
    this.getAllContact();
  }


    getAllContact(){
    this.api.getAllContact().subscribe((data:MyContact)=>{
      console.log(data);//array of contact
      this.allContacts=data
      
    })
  }
  // nameChange(){
  //   alert("name change")
  // }
  search(event:any){
    console.log(event.target.value);
    this.searchkey=event.target.value
  }

  deleteContact(contactId:any){
    this.api.deleteContact(contactId).subscribe((result:any)=>{
      alert("Delete Successfully")
      this.getAllContact()
    })
  }
}
  
  
 

  
  


