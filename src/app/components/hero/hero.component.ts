import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})

export class HeroComponent  {

  hero: Hero;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesServices: HeroesService ) {

    this.activatedRoute.params.subscribe( params => {
      this.hero = this._heroesServices.getHero( params.name );
    });
  }

}
