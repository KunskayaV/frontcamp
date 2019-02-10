import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.css']
})
export class PageViewComponent implements OnInit {
  @Input() source: string;
  @Input() userIsLogged: boolean;

  constructor() { }

  ngOnInit() {
  }

}
