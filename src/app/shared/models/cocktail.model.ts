import { Ingredient } from './ingredient.model';

export class Cocktail {
  constructor(
    public name: string,
    public img: string,
    public description: string,
    public ingredients?: Ingredient[]) { }
}
