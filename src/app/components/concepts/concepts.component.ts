import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.css']
})
export class ConceptsComponent implements OnInit {

  //ts 
  title: string = 'app';
  isLoggedIn: boolean = true;
  age: number = 20;
  myProfile: MyProfile;  // custom data type a.k.a model -- ref line no:54

  topic: string = "Event Binding";

  menuItems: any[] = [
    "Home",
    "Contacts",
    "About"
  ];

  birthday = new Date(1988, 3, 15);

  lorem  = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, aspernatur in! Eaque reprehenderit animi doloribus vero! Enim officiis minus voluptatem, aliquam rerum dolorum natus corporis necessitatibus consequuntur sapiente omnis doloremque!";

  constructor() {
    this.myProfile.name = "Arun";
    this.myProfile.city = "Chennai";
  }

  ngOnInit() {
  }

  add(a, b): number{
    let c = a +b;
    return c;
  }

  isAuth(){
    return !this.isLoggedIn;
  }

  clickHandler(event){
    console.log(event);
  }


}


//This is the Model
export interface MyProfile {
  name: string
  city: string
}