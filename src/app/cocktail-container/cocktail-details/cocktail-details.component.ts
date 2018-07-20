import { Component, OnInit } from '@angular/core';

import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';
import { Ingredient } from '../../shared/models/ingredient.model';
import { PanierService } from '../../shared/services/panier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {

  public cocktail: Cocktail;
  public notofication: string;

  constructor(private cocktailService: CocktailService, private panierService: PanierService, private router: Router) { }

  ngOnInit() {
    this.cocktailService.cocktail.subscribe( {
    next: (cocktail) =>  this.cocktail = cocktail,
    complete: () => {
      this.cocktail = null;
      this.notofication = 'Aucun cocktail disponible pour le moment';
      console.log(this.notofication);
    }
  });
  }

  editCocktail(cocktail: Cocktail) {
    console.log(this.cocktail);
  }

  /**
   * Ajouter les ingrédients dans le panier en utilisant ma méthode "addIngredients" de "PanierService"
   * @param {Ingredient[]} ingredients
   */
  addPanier(ingredients: Ingredient[]): void {
    this.panierService.addIngredients(ingredients);
    this.router.navigate(['/panier']);
  }

}
