import { Route, RouterModule, Routes } from '@angular/router';

import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { PanierComponent } from './panier/panier.component';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';

const APP_ROUTE: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'cocktails', component: CocktailContainerComponent },
  { path: '**', redirectTo: 'cocktails' }
];

// const APP_ROUTE: Routes = [
//   { path: '', redirectTo: 'cocktails', pathMatch: 'full'},
//   { path: 'panier', component: PanierComponent },
//   { path: 'cocktails', component: CocktailContainerComponent }
// ];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTE);

