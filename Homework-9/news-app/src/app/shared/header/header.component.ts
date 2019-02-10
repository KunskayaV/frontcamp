import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() userIsLogged: boolean;

  constructor() { }

  ngOnInit() {
  }

  logIn(buttonStyle: string) {
    console.log(`pressed ${buttonStyle} button`);
  }

  logOut(buttonStyle: string) {
    console.log(`pressed ${buttonStyle} button`);
  }

}
