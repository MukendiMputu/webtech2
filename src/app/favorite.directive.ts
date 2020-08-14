import { Directive } from '@angular/core';

// Directive are components without templates
@Directive({
  selector: '[appFavorite]'
})
export class FavoriteDirective {

  constructor() { }

}
