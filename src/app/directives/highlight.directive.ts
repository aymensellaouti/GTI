import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  highlightColor = 'yellow';
  @HostBinding('style.backgroundColor') bg = 'red';
  constructor() { }
  @HostListener('mouseenter') mouseenter() {
    this.bg = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave() {
    this.bg = 'red';
  }
}
