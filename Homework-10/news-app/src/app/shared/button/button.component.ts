import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() title: string;
  @Input() buttonStyle: string;
  @Input() additionalStyle: string | undefined;
  @Input() additionalClass: string | undefined;
  @Output() onPress: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  buttonClass: string = '';

  constructor() { }

  ngOnInit() {
    this.buttonClass = `btn btn-${this.buttonStyle} ${this.additionalClass || ''}`;
  }

  click(event: MouseEvent) {
    this.onPress.emit(event);
  }
}
