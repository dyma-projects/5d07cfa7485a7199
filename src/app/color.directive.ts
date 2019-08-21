import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[MyColorDirective]'
})
export class ColorDirective {
  private colorText: string;
  private element: ElementRef;

  constructor(el: ElementRef) {
    this.element = el;
   }



   @HostListener('window:keydown', ['$event']) windowKeyDown($event) {
    switch ($event.keyCode) {
      case 37:
        this.colorText = 'red';
        break;
      case 38:
        this.colorText = 'blue';
        break;
      case 39:
        this.colorText = 'green';
        break;
      case 40:
        this.colorText = 'orange';
        break;
      default:
        this.colorText = 'black';
    }
    this.changeColor();
   }

   private changeColor() {
    this.element.nativeElement.style.color = this.colorText;
   }





}
