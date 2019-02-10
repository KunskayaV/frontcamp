import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {

  @ViewChild('myTextarea') myTextareaRef: ElementRef;
  @Input() label: string;
  @Input() rows: number;
  @Input() setInputValue: string;
  @Output() getEnteredText: EventEmitter<string> = new EventEmitter<string>();

  value: string = '';
  constructor() { }

  ngOnInit() {
    if (!this.rows) this.rows = 3;
    this.myTextareaRef.nativeElement.rows = this.rows
    if (this.setInputValue) {
      this.value = this.setInputValue;
    }
  }

  provideEnteredText(value: string) {
    this.getEnteredText.emit(value);
  }

}
