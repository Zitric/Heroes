import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicies/heroes.service';
import { Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _heroesService: HeroesService,
               private router: Router) {
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  seeHeroe( name: string ) {
    this.router.navigate(['/heroe', name]);
  }

}
