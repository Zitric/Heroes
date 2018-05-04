import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicies/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})

export class HeroeComponent  {

  heroe: Heroe;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesServicies: HeroesService ) {

    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesServicies.getHeroe( params.name );
    });
  }

}
