import { Directive, ElementRef, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements OnInit {

  constructor(private el:ElementRef) {  }
  ngOnInit() {
    of(this.el)
    .pipe(
      map(elementRef => elementRef.nativeElement), // getting the el 
      filter(nativeElement => !!nativeElement), // filtering
      take(1) // avoid memory leak, it will unsubscribe automatically
    )
    // our side effect
    .subscribe(input => {
      input.focus();
    })
}
}
