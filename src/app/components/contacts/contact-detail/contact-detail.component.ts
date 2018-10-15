import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../../services/contacts.service';
import { ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contactId: number;
  contactData: Contact;  // refering to custom data type 'Contact' - go to line number 62
  editableContactObj: Contact; // refering to custom data type 'Contact' - go to line number 62
  isUpdated: boolean;
  
  constructor(private contactService: ContactsService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //read thru url params
    this.activatedRoute.params.subscribe( (params) => {
      console.log(params);
      this.contactId = params.contactId;
    })
    //passing static id

    this.contactService.getContactById(this.contactId)
                    .subscribe((resp) => {
                      console.log(resp);
                      this.contactData = resp;
                    })
  }

  openEditModal(){
    $('#editContactModal').modal('show');

    //to duplicate original object 
    this.editableContactObj = JSON.parse(JSON.stringify(this.contactData)); //duplicate obj 
  }

  editContactHandler(){
    console.log(this.editableContactObj);
    //
    this.contactService.updateContact(this.editableContactObj)
                      .subscribe( (resp) => {
                        console.log(resp);
                        //if/else 
                        this.isUpdated = true; 
                        setTimeout(function(){
                          $('#editContactModal').modal('hide');
                        }, 3000);

                      });
  }

}


//This is the Model
export interface Contact {
  name: string
  phone: number
  email: string
}
