import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    //  localhost:4200 -> localhost:4200/contactManager
    path:'',redirectTo:'contactManager',pathMatch:'full'
  },
  //listing all contact details
  {
    path:'contactManager',component:ContactManagerComponent 
  },
  //add new contact - localhost:4200/contactManger/addContact
  {
    path:'contactManager/addContact',component:AddContactComponent
  },
  //view a particular contact
  {
    path:'contactManager/view/:Id',component:ViewContactComponent
  },
  //edit a particular contact details
  {
    path:'contactManager/edit/:contactId',component:EditContactComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
