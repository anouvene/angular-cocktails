import { Component, OnInit } from '@angular/core';

import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';
import { Ingredient } from '../../shared/models/ingredient.model';
import { PanierService } from '../../shared/services/panier.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {

  public cocktail: any;

  public index: number = 0;

  constructor(
    private cocktailService: CocktailService,
    private panierService: PanierService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if (params.get('index')) {
        this.index = +params.get('index');
        this.cocktail = this.cocktailService.getCocktail(this.index);
      } else {
        this.cocktail = this.cocktailService.getCocktail(this.index);
        this.router.navigate(['cocktails', this.index]);
      }
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
