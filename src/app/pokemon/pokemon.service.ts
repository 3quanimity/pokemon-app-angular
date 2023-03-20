import { Injectable } from "@angular/core";
import { disableDebugTools } from "@angular/platform-browser";
import { POKEMONS } from "./mock-pokemons";
import { Pokemon } from "./pokemon";

@Injectable()
export class PokemonService {
  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon | undefined {
    return POKEMONS.find((pokemon) => pokemon.id === pokemonId);
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
