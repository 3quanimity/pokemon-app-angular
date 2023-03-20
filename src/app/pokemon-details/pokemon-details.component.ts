import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { POKEMONS } from "../mock-pokemons";
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-pokemon-details",
  templateUrl: "./pokemon-details.component.html",
})
export class PokemonDetailsComponent {
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.pokemonList = POKEMONS;
    const pokemonId: number = Number(this.route.snapshot.paramMap.get("id"));
    if (pokemonId >= 1 && pokemonId <= this.pokemonList.length) {
      this.pokemon = this.pokemonList.find(
        (pokemon) => pokemon.id === pokemonId
      );
    }
  }

  goToPokemonList() {
    this.router.navigate(["/pokemons"]);
  }
}
