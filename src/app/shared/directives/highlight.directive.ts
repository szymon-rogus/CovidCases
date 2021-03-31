import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  constructor(private element : ElementRef) {
  }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.color = '#343a40';
    this.element.nativeElement.style.backgroundColor = 'white';
    this.element.nativeElement.style.cursor = 'pointer'
  }

  @HostListener('mouseleave') mouseleave() {
    this.element.nativeElement.style.color = 'white';
    this.element.nativeElement.style.backgroundColor = '#343a40';
  }
}
