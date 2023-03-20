import { Pipe, PipeTransform } from "@angular/core";

/*
 * Displays the color corresponding to the pokemon's type.
 * Takes the pokemon's type as an argument.
 * Example of use:
 * {{ pokemon. type | pkmnTypeColor }}
 */
@Pipe({
  name: "pkmnTypeColor",
})
export class PkmnTypeColorPipe implements PipeTransform {
  transform(type: string): string {
    let color: string;

    switch (type) {
      case "Water":
        color = "blue lighten-1";
        break;
      case "Fire":
        color = "red lighten-1";
        break;
      case "Electric":
        color = "lime accent-1";
        break;
      case "Poison":
        color = "deep-purple accent-1";
        break;
      case "Grass":
        color = "green lighten-1";
        break;
      case "Ice":
        color = "blue lighten-2";
        break;
      case "Flying":
        color = "blue lighten-3";
        break;
      case "Bug":
        color = "green lighten-1";
        break;
      case "Ground":
        color = "brown lighten-1";
        break;
      case "Rock":
        color = "brown";
        break;
      case "Ghost":
        color = "purple lighten-1";
        break;
      case "Dragon":
        color = "orange";
        break;
      case "Psychic":
        color = "pink lighten-3";
        break;
      case "Fighting":
        color = "deep-orange";
        break;
      case "Normal":
        color = "grey lighten-3";
        break;
      case "Fairy":
        color = "pink lighten-4";
        break;
      default:
        color = "grey";
        break;
    }

    return "chip " + color;
  }
}
