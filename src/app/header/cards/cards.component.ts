import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  numero: number =0;

  incremento(){
    this.numero= this.numero+1;
  }

  decremento(){
    this.numero= this.numero-1;
  }
}
