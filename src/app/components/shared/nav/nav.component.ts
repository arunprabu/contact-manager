import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: []
})
export class NavComponent implements OnInit {

  menuItems: any[] = [
    { name: "Home", url: "/"},
    { name: "Contacts", url: "/contacts"},
    { name: "About", url: "/about"},
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
