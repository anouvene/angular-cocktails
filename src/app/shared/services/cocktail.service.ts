import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Cocktail} from '../models/cocktail.model';

@Injectable()
export class CocktailService {
  // Un premier BehaviuorSubject pour récupérer tous les cocktails
  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    {
      name: 'Mojito',
      img: 'https://static.750g.com/images/622-auto/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg',
      description: 'Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, ' +
      'est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, ' +
      'de citron vert, et de feuilles de menthe fraîche.'
    },
    {
      name: 'Tequila sunrise',
      img: 'https://cdn.liquor.com/wp-content/uploads/2017/03/07152925/tequila-sunrise-720x720-recipe.jpg',
      description: 'Le tequila sunrise est un cocktail à base de tequila, de jus d\'orange, et de grenadine.'
    },
    {
      name: 'Cuba libre',
      img: 'https://static.cuisineaz.com/610x610/i74474-cuba-libre.jpg',
      description: 'Le Cuba libre, ou rhum-Coca, ou rum and Coke aux États-Unis et au Canada anglophone et francophone, ' +
      'ou Cuba au Mexique, est un cocktail à base de rhum, de citron vert, et de cola, variante des Ti-punch des Antilles, ' +
      'des Mojito, et Daïquiri.'
    },
    {
      name: 'Caïpirinha',
      img: 'https://image.afcdn.com/recipe/20140130/61631_w420h344c1cx300cy250.jpg',
      description: 'La caipirinha est un cocktail brésilien préparé à base de cachaça, de sucre de canne et de citron vert.'
    },
    {
      name: 'Margarita',
      img: 'https://cdn.liquor.com/wp-content/uploads/2017/07/05150949/Frozen-Margarita-720x720-recipe.jpg',
      description: 'La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C\'est un before lunch ' +
      'qui serait une version du cocktail daisy dans lequel on remplaça le brandy par de la téquila.'
    }
  ]);

  // Un deuxième BehaviourSubject pour récupérer le premier cocktail par défaut dans la liste
  // ou un cocktail sélectionné par l'utilisateur
  // value est un getteur permettant de récupérer une valeur sur un BehaviourSubject
  public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject<Cocktail>(this.cocktails.value[0]);

  constructor() { }

  /**
   * Sélectionner un nouveau cocktail dans la liste
   * La méthode next permet de passer une nouvelle valeur au BehaviorSubject
   * @param {number} index
   */
  selectCocktail(index: number): void {
    this.cocktail.next(this.cocktails.value[index]);
  }

  addCocktail() {
    const cocktails = {
      name: 'Gin tonic',
      img: 'http://recettes.nicolas.com/wp-content/uploads/2016/04/341-638x483.jpg',
      description: 'Le gin tonic est un cocktail alcoolisé à base de gin et d\'eau tonique, parfois accompagné avec ' +
      'une tranche de citron ou de citron vert, et servi avec de la glace.',
      isSelected: false
    };

    // this.cocktails.push(cocktails);
  }

  /**
   * Get current cocktail on click event
   * @param {Cocktail} cocktail
   */
  changeCocktail(cocktail: Cocktail): void {
    // this.cocktailSelected =  cocktail;
  }

  /**
   * Update cocktail
   * @param $event
   */
  updateCocktail($event) {
    console.log($event);
  }

  /**
   * Delete coctail
   * @param cocktail
   */
  deleteCocktail(index: number) {
    let allCocktails = [];
    this.cocktails.subscribe((cocktails: Cocktail[]) => allCocktails = cocktails)
    allCocktails.splice(index, 1);

    if (allCocktails.length > 0) {
      this.cocktail.next(allCocktails[0]);
    } else {
      this.cocktail.complete();
    }
  }

}
