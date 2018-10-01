import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html'
})
export class CardHeroComponent {

  @Input() hero: any = {};
  @Input() index: number;

  constructor( private router: Router ) { }

  seeHero( heroName: string) {
    console.log( this.index );
    this.router.navigate(['/hero', heroName]);
  }

}
