import { Component, OnInit } from '@angular/core';
import { Cocktail } from './../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';
import { CocktailsFilterPipe } from '../../shared/pipes/cocktails-filter.pipe';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css'],
  providers: [ CocktailsFilterPipe]
})
export class CocktailsListComponent implements OnInit {
  public cocktails: Cocktail[];
  public search: string = '';

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
