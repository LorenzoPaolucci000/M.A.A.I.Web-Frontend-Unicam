

import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, toArray } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
    selector: 'app-Admin',
    templateUrl: './form.admin.component.html',
    styleUrls: ['./form.admin.component.css'],
  })



  
export class AdminComponent implements OnInit {
 
  showAdminForm: boolean = false;
  anno:number=0;
  constructor(private http: HttpClient) {}
  annoAccademicoInizio: number=0;
  annoAccademicoFine: number=0;
  private nome: string = '';
  private scuola: string='';
  private citta: string='';
  items: string[]=[];
  private visualizza:string='';
  //http: any;

 /* constructor(private route: ActivatedRoute) {
    this.route.url.subscribe(urlSegments => {
      this.showAdminForm = urlSegments.some(segment => segment.path === 'admin');
    });
  
  }*/
  
  ngOnInit(): void {
    
 
      }

  toggleAdminForm() {
    this.showAdminForm = !this.showAdminForm;
  }


  inviaForm() {
  
  
    if (this.validateYears()) {
      // Puoi eseguire qui le operazioni che desideri con i valori degli anni accademici
      console.log('Anno accademico di inizio:', this.annoAccademicoInizio);
      console.log('Anno accademico di fine:', this.annoAccademicoFine);
      
      this.onClick()

    } else {
      alert("Controlla gli anni accademici inseriti gli anni devono avere 4 cifre e l'anno inserito sotto deve essere quello sopra + 1.");
    }
    

  
}





  validateYears(): boolean {
    if (this.annoAccademicoInizio && this.annoAccademicoFine) {
      if (this.annoAccademicoFine === this.annoAccademicoInizio + 1) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  onClick() {

    /*this.anno=this.annoAccademicoInizio+this.annoAccademicoFine;
    let annoNome=+"" +this.anno+" "+this.nome;
    let scuolaCitta=+""+ this.scuola+" "+this.citta;
    scuolaCitta=scuolaCitta.substring(1);
    console.log(annoNome);
    console.log(scuolaCitta);
    */
   console.log();
    const nome:string=this.nome;
    const anno:number=this.anno=this.annoAccademicoInizio+this.annoAccademicoFine;;
    const nomeScuola:string=this.scuola;
    const cittaScuola:string=this.citta;
    
    let body = { nome,anno,nomeScuola,cittaScuola };
    this.http
      .post<string>('http://localhost:8080/professori/createEmptyActivity1',body)
      .subscribe({
        next: (response) => console.log( alert("inserimento avvenuto con successo"), response),
        error: (error) => console.log(error),
      });
  }


  cambioNome(event: any) {
    this.nome = event.target.value;
    
  }
  cambioCitta(event: any) {
    this.citta = event.target.value;
    
  }
  cambioScuola(event: any) {
    this.scuola = event.target.value;
    
  }


   //items: string[] = ['Opzione 1', 'Opzione 2', 'Opzione 3']; // Lista di stringhe
   showDropdown: boolean = false;

   toggleDropdown() {
     let array=this.getPendingActivities();
     array.subscribe(
       (result: string[]) => {
         // Qui puoi utilizzare i valori emessi dall'Observable come un array di stringhe
         this.items=result; // Stampa i valori su console
       }
     );
 
 
     
 
     this.showDropdown = !this.showDropdown;
   }
   getPendingActivities(): Observable<string[]> {

    return this.http.get<string[]>('http://localhost:8080/professori/getPendingActivities').pipe(
      map((response: any) => response.map((item: any) => item.toString()))
    );
    return this.http.get<string[]>('http://localhost:8080/professori/getPendingActivities');
  }




  handleButtonClick(): void {
   
    const nome:string=this.visualizza;
    console.log(nome);
    let body = { nome};
    this.http
    .post('http://localhost:8080/professori/uploadActivityDefinitively',body)
    .subscribe({
      next: (response) => console.log(alert("inserimento avvenuto con successo"), response),
      error: (error) => console.log(error),
    });
  }

  selectItem(event: any) {
    this.visualizza=event.target.value;
      }
}




