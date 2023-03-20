import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { PokemonService } from "./pokemon.service";

@Directive({
  selector: "[pkmnCardStyling]",
})
export class CardStylingDirective {
  private defaultBorderColor: string = "#f5f5f5";
  private defaultBorderWidth: string = "4px";
  private highlightedBorderWidth: string = "6px";
  private highlightedBgColor: string = "#fff";

  constructor(private el: ElementRef, private pokemonService: PokemonService) {
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

  getTypeColor(type: string): string {
    return this.pokemonService.getTypeColor(type);
  }

  setBorderColor(width: string, color: string) {
    let border = `solid ${width} ${color}`;
    this.el.nativeElement.style.border = border;
  }

  setBackgroundColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
