import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <hr>
      <app-nav>
        <li class="nav-item">
          <a class="nav-link" href="#">Go to Top</a>
        </li>
      </app-nav>
      <p class="yellowBg">Copyright &copy; 2018</p>
    </footer>
  `,
  styles: [
    `
    .yellowBg{
      background: yellow;
    }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
