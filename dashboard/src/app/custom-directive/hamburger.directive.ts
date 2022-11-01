import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHamburger]'
})
export class HamburgerDirective {

  constructor(public element:ElementRef,public renderer:Renderer2) { }

  @HostListener('toggle') mouseclick(){
    this.renderer.addClass(this.element.nativeElement,"toggle");
  }
}
