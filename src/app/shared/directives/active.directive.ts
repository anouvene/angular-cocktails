import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective /*implements OnChanges*/ {

  // Créer une connexion de propriété de l'élément html avec un attribut définit dans la classe directive
  @HostBinding('style.color') color: string;
  @HostBinding('style.background-color') bgColor: string;

  // @Input('appActive') isActive: boolean;
  // ngOnChanges(): void {
  //   if (this.isActive) {
  //     this.color = 'white';
  //     this.bgColor = '#2980b9';
  //   } else {
  //     this.color = 'inherit';
  //     this.bgColor = 'transparent';
  //   }
  // }

  // set prop(val) qui permet de lier une propriété d'un objet à une fonction qui sera appelée
  // à chaque modification de cet propriété
  // Set est un accesseur Javascript qui permet d’exécuter une fonction à chaque fois que l’on essaye de modifier une propriété

  @Input('appActive') set isActiveBis(condition) {
    if (condition) {
      this.color = 'white';
      this.bgColor = '#2980b9';
    } else {
      this.color = 'inherit';
      this.bgColor = 'transparent';
    }
  }

}
