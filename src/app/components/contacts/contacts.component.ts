import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contactsList: Array<Contact>;

  constructor( private router: Router, 
              private contactService: ContactsService) {
    console.log("Inside Constructor");
  }

  ngOnInit() {
    console.log("Inside ngOnInit");
    //send a call to service to get the contactsList
    this.contactService.getContacts()
        .subscribe((resp) => {
          console.log(resp);
          this.contactsList = resp;
        })
    //get tnhe resp 
  }

  gotoAddContact(){
    this.router.navigateByUrl("/contacts/new");
  }
}

//This is the Model
export interface Contact {
  name: string
  phone: number
  email: string
}