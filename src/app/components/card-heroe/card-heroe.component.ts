import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html'
})
export class CardHeroeComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  seeHeroe( heroeName: string) {
    console.log( this.index );
    this.router.navigate(['/heroe', heroeName]);
  }

}
