import { Component, OnInit } from '@angular/core';
import { Cocktail } from './../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {
  public cocktails: Cocktail[];

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
    this.cocktailService.cocktails.subscribe((cocktails: Cocktail[]) => this.cocktails = cocktails);
  }

  /**
   * Supprimer un cocktail de la liste
   * @param {number} index Indice du cocktail à supprimer
   */
  deleteCocktail(index: number, e: Event): void {
    e.preventDefault();
    this.cocktailService.deleteCocktail(index);
  }


}
