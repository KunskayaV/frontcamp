import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @ViewChild('myInput') myInputRef: ElementRef;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() setInputValue: string;
  @Output() getInputValue: EventEmitter<string> = new EventEmitter<string>();

  value: string = '';
  constructor() { }

  ngOnInit() {
    if (!this.placeholder) this.placeholder = 'Type here...';
    if (this.setInputValue) {
      this.value = this.setInputValue;
    }
  }

  provideInputValue(value: string) {
    this.getInputValue.emit(value);
  }

}
