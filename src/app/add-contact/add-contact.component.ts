import { Component, OnInit } from '@angular/core';
import { MyContact } from 'src/model/myContact';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { HotObservable } from 'rxjs/internal/testing/HotObservable';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{

  allGroups:any=[] //to hold group information
  // contactName:string='';
  contact:MyContact={}//all contact details as in the form object

  constructor(private api:ApiService, private router:Router){
    this.contact.GroupId="Select A Group";
  }
  ngOnInit(): void {
    this.api.getAllGroups().subscribe((data:any)=>{
      console.log(data);
      this.allGroups=data
    })
  }

    addContact(){
      this.api.addContact(this.contact).subscribe((result:any)=>{
        this.router.navigateByUrl('')
       
      })
     
    }
  }


