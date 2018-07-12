import { Component, OnInit } from '@angular/core';
import { Cocktail } from './../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {
  public activeCocktail: number;

  public cocktails: Cocktail[];

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
    this.cocktailService.cocktails.subscribe((cocktails: Cocktail[]) => this.cocktails = cocktails);
    this.cocktailService.cocktail.subscribe((cocktail) => this.activeCocktail = this.cocktails.indexOf(cocktail));
  }

  /**
   * Méthode de sélection d'un nouveau cocktail
   * @param {number} index
   */
  changeCocktail(index: number): void {
    // Indexe du cocktail en cours
    this.activeCocktail = index;
    // Appel de la méthode de service lui transmettant un niuveau indexe de cocktail
    this.cocktailService.selectCocktail(index);
  }

  /**
   * Supprimer un cocktail de la liste
   * @param {number} index Indice du cocktail à supprimer
   */
  deleteCocktail(index: number): void {
    this.cocktailService.deleteCocktail(index);
  }


}
