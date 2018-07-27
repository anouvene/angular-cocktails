import { Route, RouterModule, Routes } from '@angular/router';

import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { PanierComponent } from './panier/panier.component';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {CocktailDetailsComponent} from './cocktail-container/cocktail-details/cocktail-details.component';
import {CocktailEditComponent} from './cocktail-container/cocktail-edit/cocktail-edit.component';

const APP_ROUTE: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'cocktails', component: CocktailContainerComponent, children: [
      { path: 'new', component: CocktailEditComponent },
      { path: ':index/edit', component: CocktailEditComponent },
      { path: ':index', component: CocktailDetailsComponent },
      { path: '', component: CocktailDetailsComponent }
  ]},
  { path: '**', redirectTo: 'cocktails' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTE);

