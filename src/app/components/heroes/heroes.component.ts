import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor( private _heroesService: HeroesService,
               private router: Router) {
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  seeHero( name: string ) {
    this.router.navigate(['/hero', name]);
  }

}
