import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  bgColor: string;
  textColor: string;

  constructor(private element: ElementRef) {
    this.bgColor = element.nativeElement.style.backgroundColor;
    this.textColor = element.nativeElement.style.color;
  }

  ngOnInit(): void {}

  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.color = '#343a40';
    this.element.nativeElement.style.backgroundColor = 'white';
    this.element.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseleave') mouseleave() {
    this.element.nativeElement.style.color = this.textColor;
    this.element.nativeElement.style.backgroundColor = this.bgColor;
  }
}
