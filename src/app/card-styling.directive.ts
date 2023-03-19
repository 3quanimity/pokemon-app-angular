import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[pkmnCardStyling]",
})
export class CardStylingDirective {
  constructor(private el: ElementRef) {
    this.setBorderColor("4px", "#f5f5f5");
  }

  @HostListener("mouseenter") onMouseEnter() {
    let typeColor = this.el.nativeElement.style.backgroundColor;
    this.setBorderColor("6px", typeColor);
    this.setBackgroundColor("#fff");
  }

  @HostListener("mouseleave") onMouseLeave() {
    let typeColor = this.el.nativeElement.style["border-color"];
    this.setBorderColor("4px", "#f5f5f5");
    this.setBackgroundColor(typeColor);
  }

  setBorderColor(width: string, color: string) {
    let border = `solid ${width} ${color}`;
    this.el.nativeElement.style.border = border;
  }

  setBackgroundColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
