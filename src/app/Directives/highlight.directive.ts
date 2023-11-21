import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(public elem : ElementRef) {

    this.elem.nativeElement.style.color = "darkBlue";
  }

  @HostListener('mouseover')onMouseenter() {
    this.elem.nativeElement.style.color = "lightBlue";
  }

  @HostListener('mouseout')onMouseLeave() {
    this.elem.nativeElement.style.color = "darkBlue";

  }
}
