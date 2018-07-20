import {Component, OnDestroy, OnInit} from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';
import { PanierService } from '../../shared/services/panier.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent implements OnInit, OnDestroy {

  public ingredients: Ingredient[] = [];
  private subscription: Subscription;

  constructor(private panierService: PanierService) { }

  /**
   * Récupérer la listes des ingrédients fournis par PanierService
   */
  ngOnInit() {
    this.subscription = this.panierService.panier.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
        console.log(this.ingredients);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
