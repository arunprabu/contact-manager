import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {
  constructor( private http:Http) { }

  //1. get the form data from comp ts 
  createContact( contactData ){
    console.log(contactData);
    //2. send the data to rest api 
    return this.http.post("https://jsonplaceholder.typicode.com/users", contactData)
              .map(response => {
                //3. receive the resp  from rest api 
                console.log(response);
                //4. send it back to the comp ts 
                return response.json();
              });
  }

  getContacts(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
            .map(response => {
              //3. receive the resp  from rest api 
              console.log(response);
              //4. send it back to the comp ts 
              return response.json();
            });
  }

  getContactById(id){
    console.log(id);
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
            .map(response => {
              //3. receive the resp  from rest api 
              console.log(response);
              //4. send it back to the comp ts 
              return response.json();
            });
  }

  updateContact(contactData){
    console.log(contactData.id)
    return this.http.put("https://jsonplaceholder.typicode.com/users/"+contactData.id, contactData)
            .map(response => {
              //3. receive the resp  from rest api 
              console.log(response);
              //4. send it back to the comp ts 
              return response.json();
            });

  }
}
