import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() dropdownTitle: string;
  @Input() dropdownItems: any[];
  @Output() onPress: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  pickItem(event: MouseEvent, index: number) {
    this.onPress.emit(index);
  }

}
