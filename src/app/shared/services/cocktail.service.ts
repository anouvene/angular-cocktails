import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Cocktail } from '../models/cocktail.model';

@Injectable()
export class CocktailService {
  // Un premier BehaviuorSubject pour récupérer tous les cocktails
  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    {
      name: 'Mojito',
      img: 'https://static.750g.com/images/622-auto/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg',
      description: 'Le mojito, prononcé [moˈxito] en espagnol, ou mojito, morito, ou mohito en français, ' +
      'est un cocktail traditionnel de la cuisine cubaine et de la culture de Cuba, à base de rhum, de soda, ' +
      'de citron vert, et de feuilles de menthe fraîche.',
      ingredients: [
        {name: 'Feuilles de menthe verte', quantity: 5},
        {name: 'Rhum cubain', quantity: 5},
        {name: 'Citron vert lime', quantity: 2},
        {name: 'Eau gazeuse, soda', quantity: 1},
        {name: 'Glace pilée', quantity: 8}
      ]
    },
    {
      name: 'Tequila sunrise',
      img: 'https://cdn.liquor.com/wp-content/uploads/2017/03/07152925/tequila-sunrise-720x720-recipe.jpg',
      description: 'Le tequila sunrise est un cocktail à base de tequila, de jus d\'orange, et de grenadine.',
      ingredients: [
        {name: 'Tequila', quantity: 6},
        {name: 'Jus d\'orange', quantity: 12},
        {name: 'Sirop de grenadine', quantity: 2}
      ]
    },
    {
      name: 'Cuba libre',
      img: 'https://static.cuisineaz.com/610x610/i74474-cuba-libre.jpg',
      description: 'Le Cuba libre, ou rhum-Coca, ou rum and Coke aux États-Unis et au Canada anglophone et francophone, ' +
      'ou Cuba au Mexique, est un cocktail à base de rhum, de citron vert, et de cola, variante des Ti-punch des Antilles, ' +
      'des Mojito, et Daïquiri.',
      ingredients: [
        {name: 'Citron vert', quantity: 2},
        {name: 'cola', quantity: 5},
        {name: 'glaçons', quantity: 10}
      ]
    },
    {
      name: 'Caïpirinha',
      img: 'https://image.afcdn.com/recipe/20140130/61631_w420h344c1cx300cy250.jpg',
      description: 'La caipirinha est un cocktail brésilien préparé à base de cachaça, de sucre de canne et de citron vert.',
      ingredients: [
        {name: 'Alcool de canne à sucre brésilien', quantity: 5},
        {name: 'Citron vert', quantity: 1},
        {name: 'Cuillère à soupe de sucre en poudre', quantity: 1},
        {name: 'Sirop de canne à sucre', quantity: 1.5},
        {name: 'Glace pilée', quantity: 8}
      ]
    },
    {
      name: 'Margarita',
      img: 'https://cdn.liquor.com/wp-content/uploads/2017/07/05150949/Frozen-Margarita-720x720-recipe.jpg',
      description: 'La Margarita est un cocktail à base de tequila, inventé par des Américains au Mexique. C\'est un before lunch ' +
      'qui serait une version du cocktail daisy dans lequel on remplaça le brandy par de la téquila.',
      ingredients: [
        {name: 'Tequila', quantity: 5},
        {name: 'Jus de lime', quantity: 17},
        {name: 'Cointreau, grand marnier', quantity: 1},
        {name: 'Jus de citrons verts', quantity: 1.5},
        {name: 'Glace pilée', quantity: 8}
      ]
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
  getCocktail(index: number): Cocktail {
    return this.cocktails.value[index];
  }

  /**
   * Add a cocktail to the cocktails array
   * or Update cocktail at index position
   * @param {Cocktail} cocktail
   */
  addCocktail(cocktail: Cocktail, index?: number) {
    const cocktails = this.cocktails.value;
    if (index === undefined) { // Add new cocktail
      cocktails.push(cocktail);
    } else { // Update cocktail at index position
      cocktails.splice(index, 1, cocktail);
    }
  }

  /**
   * Delete coctail
   * @param cocktail
   */
  deleteCocktail(index: number) {
    let allCocktails = [];
    this.cocktails.subscribe((cocktails: Cocktail[]) => allCocktails = cocktails);
    allCocktails.splice(index, 1);

    if (allCocktails.length > 0) {
      this.cocktail.next(allCocktails[0]);
    } else {
      this.cocktail.complete();
    }

  }

}
