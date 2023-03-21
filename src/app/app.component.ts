import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./pokemon/mock-pokemons";
import { Pokemon } from "./pokemon/pokemon";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;
  filteredPokemons: Pokemon[] = this.pokemonList;

  ngOnInit() {}

  // selectPokemon(pokemonId: string) {
  //   this.pokemonSelected = this.pokemonList.find(
  //     (pokemon) => pokemon.id === Number(pokemonId)
  //   );
  // }

  filterPokemons(searchTerm: string) {
    if (searchTerm) {
      this.filteredPokemons = this.pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredPokemons = this.pokemonList;
    }
  }
}
