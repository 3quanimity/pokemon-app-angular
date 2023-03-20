import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PokemonDetailsComponent } from "./pokemon-details/pokemon-details.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";

const routes: Routes = [
  { path: "pokemons", component: PokemonListComponent },
  { path: "pokemon/:id", component: PokemonDetailsComponent },
  { path: "", redirectTo: "pokemons", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }, // redirects to 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
