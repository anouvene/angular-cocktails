import {
  Directive, OnInit, ElementRef, Renderer2, Input, HostListener, HostBinding, OnChanges
} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit/*, OnChanges*/ {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  // @Input('appColor') isSelectedCocktail: boolean;
  @Input() set appColor(condition: boolean) {
    if (condition) {
      this.isSelectedClass = condition;
    } else {
      this.isSelectedClass = false;
    }
  }

  @HostBinding('class.rouge') isSelectedClass: boolean = false;

  // @HostListener('click') onclick(): void {
  //   // this.color = '#258e25';
  // }

  ngOnInit() {}

  //
  // ngOnChanges(changes) {
  //   const isSelected = changes.isSelectedCocktail.currentValue;
  //
  //   if (isSelected) {
  //     this.isSelectedClass = true;
  //   } else {
  //     this.isSelectedClass = false;
  //   }
  // }

  // changeColor(color: string) {
    // console.log(this.el.nativeElement.getAttribute('ng-reflect-is-selected-cocktail'));
    // if (this.el.nativeElement.getAttribute('ng-reflect-is-selected-cocktail') === 'true') {
    // if (this.isSelectedCocktail) {
    //   this.renderer.setStyle(this.el.nativeElement, 'color', color);
    // } else {
    //   this.renderer.setStyle(this.el.nativeElement, 'color', 'inherit');
    // }
  // }
}
