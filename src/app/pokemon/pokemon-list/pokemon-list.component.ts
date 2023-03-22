import { Component, Input } from "@angular/core";
import { Pokemon } from "../pokemon";
import { Router } from "@angular/router";
import { PokemonService } from "../pokemon.service";

declare var M: any;

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styles: [],
})
export class PokemonListComponent {
  @Input() filteredPokemons: Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit() {
    if (!this.filteredPokemons) {
      this.pokemonService
        .getPokemonList()
        .subscribe((pokemonList) => (this.filteredPokemons = pokemonList));
    }

    const tooltipElems = document.querySelectorAll(".tooltipped");
    M.Tooltip.init(tooltipElems);
  }

  getTypeColor(type: string): string {
    return this.pokemonService.getTypeColor(type);
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(["/pokemon", pokemon.id]);
  }
}
