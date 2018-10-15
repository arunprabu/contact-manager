import { Component } from '@angular/core';

//Decorator 
// Component -- Consists of html, css, ts and exposed in a selector
// Reusable block of code
@Component({
  selector: 'app-root',   //tag in index.html
  templateUrl: './app.component.html',    //Step4: Go to html
  styleUrls: ['./app.component.css']  //css
})
export class AppComponent {
  
}
