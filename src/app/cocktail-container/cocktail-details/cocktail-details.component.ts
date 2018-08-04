import { Component, OnInit } from '@angular/core';

import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';
import { Ingredient } from '../../shared/models/ingredient.model';
import { PanierService } from '../../shared/services/panier.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {

  public cocktail: Cocktail;

  public index: number;

  constructor(
    private cocktailService: CocktailService,
    private panierService: PanierService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.index) {
        this.index = params.index;
      } else {
        this.index = 0;
      }

      this.cocktailService.getCocktail(this.index).subscribe((cocktail: Cocktail) => {
        this.cocktail = cocktail;
        this.router.navigate(['cocktails', this.index]);

        // Si aucun cocktail
        if (this.cocktail === undefined) {
          this.router.navigate(['cocktails', 0]);
        }
      });
    });
  }

  getUrl() {
    return ['/cocktails', this.index, 'edit'];
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
