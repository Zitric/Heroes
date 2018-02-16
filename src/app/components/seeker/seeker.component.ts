import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicies/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html'
})
export class SeekerComponent implements OnInit {

  heroes: Heroe[] = [];
  text: string;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.text = params.text;
      this.heroes = this._heroesService.searchHeroes( this.text );
      // console.log( this.heroes );
    });
  }


  seeHeroe( name: string ) {
    this.router.navigate(['/heroe', name]);
    // console.log(name);
  }

}
