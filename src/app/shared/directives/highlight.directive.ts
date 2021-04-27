import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';
import {StylingService} from '../../services/styling.service';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  bgColor: string;
  textColor: string;

  constructor(private element: ElementRef, private stylingService: StylingService) {
    this.bgColor = element.nativeElement.style.backgroundColor;
    this.textColor = element.nativeElement.style.color;
  }

  ngOnInit(): void {}

  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.color = this.stylingService.getBackgroundColor();
    this.element.nativeElement.style.backgroundColor = this.stylingService.getTextColor();
    this.element.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseleave') mouseleave() {
    this.element.nativeElement.style.color = this.stylingService.getTextColor();
    this.element.nativeElement.style.backgroundColor = this.bgColor;
  }
}
