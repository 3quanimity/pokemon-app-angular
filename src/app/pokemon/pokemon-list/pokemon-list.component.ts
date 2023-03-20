import { Component, Input } from "@angular/core";
import { Pokemon } from "../pokemon";
import { POKEMONS } from "../mock-pokemons";
import { Router } from "@angular/router";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styles: [],
})
export class PokemonListComponent {
  @Input() filteredPokemons: Pokemon[];

  constructor(private router: Router) {}

  ngOnInit() {
    if (!this.filteredPokemons) {
      this.filteredPokemons = POKEMONS;
    }
  }

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

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(["/pokemon", pokemon.id]);
  }
}
