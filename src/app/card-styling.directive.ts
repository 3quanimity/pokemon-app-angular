import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[pkmnCardStyling]",
})
export class CardStylingDirective {
  private defaultBorderColor: string = "#f5f5f5";
  private defaultBorderWidth: string = "4px";
  private highlightedBorderWidth: string = "6px";
  private highlightedBgColor: string = "#fff";

  constructor(private el: ElementRef) {
    this.setBorderColor(this.defaultBorderWidth, this.defaultBorderColor);
    this.setBackgroundColor(this.getTypeColor(this.type));
  }

  @Input("pkmnCardStyling") type: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorderColor(
      this.highlightedBorderWidth,
      this.getTypeColor(this.type)
    );
    this.setBackgroundColor(this.highlightedBgColor);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.setBorderColor(this.defaultBorderWidth, this.defaultBorderColor);
    this.setBackgroundColor(this.getTypeColor(this.type));
  }

  // TODO: Extract this and remove duplicate
  getTypeColor(type: string): string {
    switch (type) {
      case "Water":
        return "#79bef2";
      case "Fire":
        return "#ff6961";
      case "Electric":
        return "#ffe493";
      case "Poison":
        return "#ba55d3";
      case "Grass":
        return "#8bcd7d";
      case "Ice":
        return "#add8e6";
      case "Flying":
        return "#b0c4de";
      case "Bug":
        return "#b8d0a5";
      case "Ground":
        return "#d3b357";
      case "Rock":
        return "#a6937c";
      case "Ghost":
        return "#c5aecf";
      case "Dragon":
        return "#f9a1c2";
      case "Psychic":
        return "#ffb6c1";
      case "Fighting":
        return "#cd5c5c";
      case "Normal":
        return "#f5deb3";
      default:
        return "#fff";
    }
  }

  setBorderColor(width: string, color: string) {
    let border = `solid ${width} ${color}`;
    this.el.nativeElement.style.border = border;
  }

  setBackgroundColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
