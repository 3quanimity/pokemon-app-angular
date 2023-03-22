import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
} from "rxjs";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-pokemon-search",
  templateUrl: "./pokemon-search.component.html",
})
export class PokemonSearchComponent {
  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemons$ = this.searchTerms.pipe(
      // notice when the user made a mistake when typing and dont trigger seach unless he's done typing
      // {..."a"."ab"..."abz"."ab"..."abc"...}
      debounceTime(300),
      // {..."ab"..."ab"..."abc"...}
      distinctUntilChanged(),
      // {..."ab"..."abc"...}
      switchMap((term) => this.pokemonService.searchPokemon(term)) // cancels the previous search and only executes the latest one
    );
  }

  // pushes the search terms into searchTerms
  search(searchTerm: string) {
    this.searchTerms.next(searchTerm);
  }

  goToDetail(pokemon: Pokemon) {
    this.router.navigate(["/pokemon", pokemon.id]);
  }
}
