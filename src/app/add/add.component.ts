import { Component, OnInit } from '@angular/core';
import { PanierService } from '../shared/services/panier.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  aliment: string = '';

  foodCtrl: FormControl;
  addForm: FormGroup;

  /**
   * Checking whitespace
   * @param {FormControl} control
   * @returns {{whitespace: boolean}}
   */
  static noWhitespaceValidator(control: FormControl) {
    console.log(control);
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  constructor(private panierService: PanierService, private fb: FormBuilder) {
    this.foodCtrl = this.fb.control('', [Validators.required, AddComponent.noWhitespaceValidator]);
    this.addForm = this.fb.group({food: this.foodCtrl});
  }

  ngOnInit() { }

  add() {
    this.panierService.panier.push(this.addForm.value.food);
  }



}
