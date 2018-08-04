import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Cocktail } from '../models/cocktail.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class CocktailService {
  // Un premier BehaviuorSubject pour récupérer tous les cocktails
  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject(null);

  // Un deuxième BehaviourSubject pour récupérer le premier cocktail par défaut dans la liste
  // ou un cocktail sélectionné par l'utilisateur
  // value est un getteur permettant de récupérer une valeur sur un BehaviourSubject
  public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject<Cocktail>(null);

  constructor(private http: HttpClient) {
    this.initCocktails();
  }

  /**
   * Initiliser la liste des cocktails en provenance de Firebase
   */
  initCocktails(): void {
    this.http.get<Cocktail[]>('https://cocktails-b42f0.firebaseio.com/cocktails.json')
      .subscribe(cocktails => { this.cocktails.next(cocktails); });
  }

  /**
   * Sélectionner un nouveau cocktail dans la liste
   * La méthode next permet de passer une nouvelle valeur au BehaviorSubject
   * @param {number} index
   */
  getCocktail(index: number): Observable<Cocktail> {
    return this.cocktails.pipe(
      filter(cocktails => cocktails != null),
      map((cocktails: Cocktail[]) => cocktails[index]));
  }

  /**
   * Add a cocktail to the cocktails array
   * or Update cocktail at index position
   * @param {Cocktail} cocktail
   */
  addCocktail(cocktail: Cocktail) {
    const cocktails = this.cocktails.value;
    cocktails.push(cocktail);
  }

  /**
   * Edit a cocktail
   * @param {Cocktail} editCocktail
   */
  editCocktail(editCocktail: Cocktail) {
    const cocktails = this.cocktails.value;
    const index = cocktails.findIndex(c => c.name === editCocktail.name);
    cocktails[index] = editCocktail; // changement de valeur
    this.cocktails.next(cocktails); // Mise à jour le tableau de cocktails pour BehaviorSubject

    // Update cocktail at index position
    // cocktails.splice(index, 1, editCocktail);
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
