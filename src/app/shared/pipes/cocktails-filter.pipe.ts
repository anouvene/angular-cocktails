import { Pipe, PipeTransform } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';

@Pipe({
  name: 'cocktailsFilter'
})
export class CocktailsFilterPipe implements PipeTransform {

  /**
   * Find the cocktails in the cocktails list by search word
   * @param {Cocktail[]} cocktails
   * @param {string} search
   * @returns {Cocktail[] | null}
   */
  transform(cocktails: Cocktail[], search: string): Cocktail[] | null {
    if (!search.length) {
      return cocktails;
    } else {
      return cocktails.filter( c => c.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    }
  }

}
