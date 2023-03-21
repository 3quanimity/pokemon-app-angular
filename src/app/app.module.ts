// Modules
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { PokemonModule } from "./pokemon/pokemon.module";
// Components
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [BrowserModule, FormsModule, PokemonModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
