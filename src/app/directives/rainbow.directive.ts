import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  @Input() initBc;
  colors = [
    'lightblue',
    'green',
    'pink',
    'purple',
    'crimson',
    'coral',
    'gold',
    'lightgray',
    'lightgreen',
    'lightskyblue',
    'skyblue'
  ];
  @HostBinding('style.borderColor') bc;
  @HostBinding('style.color') color;
  constructor() {
    this.bc = this.initBc;
  }
  @HostListener('keypress') changeColor() {
    const indice = Math.floor(Math.random() * (this.colors.length - 1) );
    this.bc = this.colors[indice];
    this.color = this.colors[indice];
  }
}
