import { Component, OnInit } from '@angular/core';

/*
@Component({ ... }): Questo è un decoratore Angular che viene utilizzato per definire le metadati del componente, come il selettore, 
il modello e i fogli di stile.

selector: 'app-dashboard': Questo definisce il selettore CSS utilizzato per identificare il componente all'interno dei template HTML. 
Quando Angular vede un tag <app-dashboard> all'interno di un template HTML, istanzierà e renderizzerà questo componente.

templateUrl: './dashboard.component.html': Questo definisce il percorso del file HTML associato a questo componente. Angular userà 
questo file HTML come modello per il componente.

styleUrls: ['./dashboard.component.css']: Questo definisce un array di percorsi dei file CSS associati a questo componente. 
Gli stili definiti in questi file verranno applicati al template HTML del componente.

export class DashboardComponent implements OnInit { ... }: Questa è la definizione della classe DashboardComponent. La parola 
chiave export indica che questa classe è esportata da questo file e può essere importata ed utilizzata in altri file TypeScript.

implements OnInit: Questo indica che la classe DashboardComponent implementa l'interfaccia OnInit. Questo è un hook del ciclo di 
vita di Angular che viene chiamato dopo che Angular ha inizializzato tutte le proprietà del componente. È qui che è possibile eseguire 
le operazioni di inizializzazione del componente.

constructor() { ... }: Questo è il costruttore della classe DashboardComponent. Attualmente è vuoto, ma può essere utilizzato per 
inizializzare variabili o per iniettare servizi necessari al componente.

ngOnInit(): void { ... }: Questo è il metodo ngOnInit() che viene chiamato automaticamente da Angular dopo che tutte le proprietà 
del componente sono state inizializzate. È qui che è possibile eseguire le operazioni di inizializzazione del componente. 
Attualmente è vuoto, ma può essere implementato per eseguire azioni specifiche 
quando il componente viene inizializzato.
*/


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
