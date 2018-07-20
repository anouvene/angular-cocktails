import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PanierService {

  public panier: BehaviorSubject<Ingredient[]> = new BehaviorSubject(null);

  constructor() { }

  /**
   * Fournir la liste des ingrédients ajoutés par l'utilisateur
   * @param {Ingredient[]} ingredients
   */
  addIngredients(ingredients: Ingredient[]): void {
    // console.log(ingredients);

    const currentValue = this.panier.value;
    if (currentValue) {
      this.panier.next(currentValue.concat(ingredients));
    } else {
      this.panier.next(ingredients);
    }
  }
}
