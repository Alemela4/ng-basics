import { Component, Input, output } from '@angular/core';
import { Prodotto } from '../../models/Prodotto';
import { CurrencyPipe, NgClass, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-prodotto-card',
  imports: [UpperCasePipe, CurrencyPipe, NgClass], // Importare le direttive
  templateUrl: './prodotto-card.component.html',
  styleUrl: './prodotto-card.component.css'
})
export class ProdottoCardComponent {
  @Input()
  prodotto?: Prodotto

  prodottoSelezionato = output<Prodotto>(); // Output per la selezione di un prodotto (evento)

  scatenaEvento(){
    this.prodottoSelezionato.emit(this.prodotto!); // quando clicco sul pulsante, emetto un evento con il prodotto selezionato. this.prodotto ha il ! perchè dichiaro che non è undefined
  }

  saluta(){
    alert("Ciao, sono un prodotto!");
  }
}
