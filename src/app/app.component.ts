import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ListaProdottiComponent } from "./components/lista-prodotti/lista-prodotti.component";

//E' UN DECORATORE CHE AGGIUNGE DELLE FUNZIONALITA' ALLA CLASSE SENZA ANDARLA A MODIFICARE DIRETTAMENTE
@Component({
  selector: 'app-root', //è il tag che troviamo in html e che utilizziamo per richiamare il componente
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ListaProdottiComponent], 
  templateUrl: './app.component.html', //è il file html che andremo a utilizzare per il componente
  styleUrl: './app.component.css' //è il file css che andremo a utilizzare per il componente
})

//UN COMPONENTE E' UNA CLASSE ED E' ESPORTABILE 
export class AppComponent {
  title = 'ng-basics';
}
