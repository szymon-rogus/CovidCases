import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appEnlargeChevron]'
})
export class EnlargeChevronDirective implements OnInit{

  @Input() sizeNormal: string;
  @Input() sizeLarge: string;
  @HostBinding('class') classOf: string;

  constructor() { }

  ngOnInit(): void {
    this.classOf = this.sizeNormal;
  }

  @HostListener('mouseenter') mouseover() {
    this.classOf = this.sizeNormal + this.sizeLarge;
  }

  @HostListener('mouseleave') mouseleave() {
    this.classOf = this.sizeNormal;
  }
}
