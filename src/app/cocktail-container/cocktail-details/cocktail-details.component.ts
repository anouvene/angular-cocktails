import { Component, OnInit } from '@angular/core';

import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {

  public cocktail: Cocktail;
  public notofication: string;

  constructor(private cocktailService: CocktailService) { }

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

  editCocktail(cocktail: Cocktail) {}

}
