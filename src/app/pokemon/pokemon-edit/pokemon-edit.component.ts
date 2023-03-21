import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-pokemon-edit",
  template: `
    <h2 class="center">Edit {{ pokemon?.name }}</h2>
    <p class="center">
      <img
        *ngIf="pokemon"
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/{{
          pokemon.num
        }}.png"
        alt="{{ pokemon.name }}"
      />
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [],
})
export class PokemonEditComponent {
  pokemonId: number;
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.pokemonId = Number(this.route.snapshot.paramMap.get("id"));
    if (this.pokemonId) {
      // this.pokemon = this.pokemonService.getPokemonById(this.pokemonId);
      this.pokemonService
        .getPokemonById(this.pokemonId)
        .subscribe((pokemon) => (this.pokemon = pokemon));
    }
  }
}
