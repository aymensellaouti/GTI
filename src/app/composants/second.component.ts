import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <p (click)="sendEvent()">
      second works!
    </p>
  `,
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  @Input() container;
  @Output() sendDataToPere = new EventEmitter();
  constructor() { }
  ngOnInit() {
    console.log(this.container);
  }
  sendEvent() {
    this.sendDataToPere.emit(
      'Bonjour fiston'
    );
  }

}
