import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', 
  templateUrl: './header.component.html', //html should be only one
  styleUrls: ['./header.component.css'] //csss 
})
export class HeaderComponent implements OnInit {
  //ts
  constructor() { }

  ngOnInit() {
  }

}
