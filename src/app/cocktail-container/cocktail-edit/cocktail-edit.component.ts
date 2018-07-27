import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CocktailService } from '../../shared/services/cocktail.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Cocktail} from '../../shared/models/cocktail.model';

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css']
})
export class CocktailEditComponent implements OnInit {

  private cocktailForm: FormGroup;
  private ingredientForm: FormGroup;

  public cocktailId: number;
  public cocktail: Cocktail;

  /**
   * To init the coktail form
   * @param {FormBuilder} fb FormBuilder service
   * @param {CocktailService} cocktailService Cocktail service
   * @param {ActivatedRoute} route Routind service
   */
  constructor(private fb: FormBuilder, private cocktailService: CocktailService, private route: ActivatedRoute ) { }

  /**
   * To retrieve a cocktail by id and by getCoctail() method from CocktailService
   */
  ngOnInit() {
    this.route.paramMap.subscribe( (params: ParamMap) => {
      if (params.get('index')) {
        this.cocktailId = +params.get('index');
        this.cocktail = this.cocktailService.getCocktail(this.cocktailId);

        if (this.cocktail) {
          this.initForm(this.cocktail);
        }
      } else {
        this.initForm();
      }

    });
  }

  /**
   * Init the cocktail form
   * @param {Cocktail} cocktail
   */
  initForm(cocktail: Cocktail = {
    name: '',
    img: '',
    description: '',
    ingredients: []
  }) {
    this.cocktailForm = this.fb.group({
      name: [cocktail.name, [Validators.required]],
      img: [cocktail.img, [Validators.required]],
      description: [cocktail.description],
      ingredients: this.fb.array(
        cocktail.ingredients.map((ingredient) => {
          return this.fb.group({
            name: [ingredient.name, [Validators.required, Validators.minLength(4)]],
            quantity: [ingredient.quantity, [Validators.required, Validators.min(1)]]
          });
        })
      )
    });
  }

  /**
   * Get ingredients FormArray
   * @returns {FormArray} Ingredients FormArray
   */
  get ingredients(): FormArray {
    return this.cocktailForm.get('ingredients') as FormArray;
  }

  /**
   * Add new ingredient fields (name + quantity)
   */
  addIngredient(): void {
    this.ingredientForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      quantity: ['', [Validators.required, Validators.min(1)]]
    });
    this.ingredients.push(this.ingredientForm);
  }

  /**
   * Supprimer le FormControl à l’index i dans le FormArray
   * @param i
   */
  deleteIngredient(i): void {
    this.ingredients.removeAt(i);
  }

  /**
   * Create a cocktail
   * And call addCocktail() method from CocktailService
   */
  createCocktail(): void {
    this.cocktailService.addCocktail(this.cocktailForm.value, this.cocktailId);
  }

}
