import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { Animale } from "../../models/Animale";
import { Prodotto } from '../../models/Prodotto';

@Component({
  selector: 'app-header',
  imports: [LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  nome: string = "Ale"; // type inference, mi permette di scrivere il nome della proprietà come stringa
  anno: number = 2000; // mi dichiaro una proprietà che mi permette di salvare un numero

  animale: Animale = {nome: "Spritz", razza: "cane"}; // mi dichiaro una proprietà che mi permette di salvare un oggetto

  prodotto?: Prodotto; // il ? indica che la proprietà è opzionale, significa che assume o il tipo prodotto o il tipo undefined -> attualmente è undefined

  bici?: Prodotto = {
      nome: "Bicicletta",
      prezzo: 150,
      desc: "Test",
      foto: ""
    }; 

  esempio(){
    this.prodotto = {
      desc: "Test",
      foto: "",
      nome: "Bicicletta",
      prezzo: 150,
    };

    let eta = 16;
    let patentato = false;

    if(eta >= 18){
      patentato = true;
    }else{
      patentato = false;
    }

    patentato = eta >= 18 ? true : false; // è if else scritto come operatore ternario 
  }
}
