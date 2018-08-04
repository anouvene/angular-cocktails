import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailsListComponent } from './cocktail-container/cocktails-list/cocktails-list.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { PanierComponent } from './panier/panier.component';
import { PanierService } from './shared/services/panier.service';

import { ColorDirective } from './shared/directives/color.directive';
import { NoWhitespaceDirective } from './shared/directives/no-whitespace.directive';
import { ActiveDirective } from './shared/directives/active.directive';

import { APP_ROUTING } from './app.routing';
import { IngredientsListComponent } from './panier/ingredients-list/ingredients-list.component';
import { HomeComponent } from './home/home.component';
import { CocktailEditComponent } from './cocktail-container/cocktail-edit/cocktail-edit.component';
import { CocktailsFilterPipe } from './shared/pipes/cocktails-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailsListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    ColorDirective,
    NoWhitespaceDirective,
    PanierComponent,
    ActiveDirective,
    IngredientsListComponent,
    HomeComponent,
    CocktailEditComponent,
    CocktailsFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [PanierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
