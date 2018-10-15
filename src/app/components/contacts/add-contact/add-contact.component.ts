import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../../services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contactData: Contact;

  isSaved: boolean = false;

  //Dependency Injection
  constructor(private contactService: ContactsService ) { 
    this.contactData['name'] = "Arun";
  }

  ngOnInit() {
  }

  submitHandler(formData){
    console.log(formData.value);
    //1. send the data to service
    this.contactService.createContact(formData.value)
        .subscribe(resp => {
          //2. get resp from the service
          console.log(resp);
          //saved or not -- if else 
          this.isSaved = true;
        });
  }
}


//This is the Model
export interface Contact {
  name: string
  phone: number
  email: string
}


