import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Pokemon } from "./pokemon";

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}

  /**
   * Gets a list of Pokemons from the API
   * @returns An Observable of an array of Pokemon or an empty array if an error occurs
   */
  getPokemonList(): Observable<Pokemon[] | []> {
    return this.http.get<Pokemon[]>("api/pokemons").pipe(
      tap((pokemonList) => this.log(pokemonList)),
      catchError((error) => this.handleError(error, []))
    );
  }

  /**
   * Gets a specific Pokemon by its id from the API
   * @param pokemonId The id of the Pokemon to get
   * @returns An Observable of the Pokemon object or undefined if an error occurs
   */
  getPokemonById(pokemonId: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  /**
   * Updates a Pokemon on the API
   * @param pokemon The Pokemon object to update
   * @returns An Observable of null or undefined if an error occurs
   */
  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };

    return this.http
      .put<Pokemon | undefined>("api/pokemons", pokemon, httpOptions)
      .pipe(
        tap((pokemon) => this.log(pokemon)),
        catchError((error) => this.handleError(error, null))
      );
  }

  /**
   * Deletes a specific Pokemon by its id from the API
   * @param pokemonId The id of the Pokemon to delete
   * @returns An Observable of null or undefined if an error occurs
   */
  deletePokemonById(pokemonId: number): Observable<null> {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  /**
   * Adds a new Pokemon to the API
   * @param pokemon The Pokemon object to add
   * @returns An Observable of null or undefined if an error occurs
   */
  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };

    return this.http.post<Pokemon>("api/pokemons", pokemon, httpOptions).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((error) => this.handleError(error, null))
    );
  }

  /**
   * Logs a response from an API request to the console in a table format.
   * @param response The response to log.
   */
  private log(response: Pokemon[] | Pokemon | undefined | {}) {
    console.table(response);
  }

  /**
   * Logs an error from an API request to the console and returns an observable with a default value.
   * @param error The error to handle
   * @param defaultValue The default value to return
   * @returns An Observable of the default value
   */
  private handleError(error: Error, defaultValue: any) {
    console.error(error);
    return of(defaultValue);
  }

  /**
   * Returns a color string associated with the provided Pokemon type.
   * @param type - A string representing a Pokemon type.
   * @returns A color string associated with the provided type.
   */
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

  /**
   * Returns a list of all allowed Pokemon types.
   * @returns An array of strings representing all allowed Pokemon types.
   */
  getAllowedPkmnTypeList(): string[] {
    return [
      "Water",
      "Fire",
      "Electric",
      "Poison",
      "Grass",
      "Ice",
      "Flying",
      "Bug",
      "Ground",
      "Rock",
      "Ghost",
      "Dragon",
      "Psychic",
      "Fighting",
      "Normal",
    ];
  }
}
