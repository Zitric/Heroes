import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html'
})
export class SeekerComponent implements OnInit {

  heroes: Hero[] = [];
  text: string;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.text = params.text;
      this.heroes = this._heroesService.searchHeroes( this.text );
    });
  }

  seeHero( name: string ) {
    this.router.navigate(['/hero', name]);
  }

}
