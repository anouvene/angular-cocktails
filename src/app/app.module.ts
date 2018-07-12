import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailsListComponent } from './cocktail-container/cocktails-list/cocktails-list.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { AddComponent } from './add/add.component';
import { PanierComponent } from './panier/panier.component';
import { PanierService } from './shared/services/panier.service';

import { ColorDirective } from './shared/directives/color.directive';
import { NoWhitespaceDirective } from './shared/directives/no-whitespace.directive';
import { ActiveDirective } from './shared/directives/active.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailsListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    ColorDirective,
    NoWhitespaceDirective,
    AddComponent,
    PanierComponent,
    ActiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
