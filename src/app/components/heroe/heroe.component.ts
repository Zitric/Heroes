import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicies/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})

export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesServicies: HeroesService ) {

    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesServicies.getHeroe( params.name );
      console.log('Heroe recived is ' + this.heroe.house );
    });
  }

  ngOnInit() {
  }

}
