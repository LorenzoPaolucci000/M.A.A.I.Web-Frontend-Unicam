import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { Anni } from 'src/app/interface/anni';

@Component({
  selector: 'app-uploadat',
  templateUrl: './uploadat.component.html',
  styleUrls: ['./uploadat.component.css'],
  
})
export class UploadatComponent implements OnInit {

  visualizza: string = 'ATT';
  private nome: string = '';
  private n:string="";
  private data = new FormData();
  private dataIscr = new FormData();
  private dataProf = new FormData();
  constructor(private http: HttpClient) {}
  private anno=0;
  anni : Anni[] =[]
  annoAccademicoInizio: number=0;
  annoAccademicoFine: number=0;
  onChangeFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.data.append('file', file);
     
    }
  }
  onChangeFileIscr(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.dataIscr.append('file', file);
    }
  }
  onChangeFileProf(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.dataProf.append('file', file);
    }
  }
  onClickIscr() {
    let anno=this.annoAccademicoInizio+this.annoAccademicoFine;
    this.http
  
      .post('http://localhost:8080/universitari/uploadConAnno1/'+ ""+anno, this.dataIscr)
      .subscribe({
        next: (response) => console.log(alert("inserimento avvenuto con successo"), response),
        error: (error) => console.log(error),
      });
  }

  onClick() {
    let anno=this.annoAccademicoInizio+this.annoAccademicoFine;
   
    this.http
      .post('http://localhost:8080/attivita/uploadConAnno1/' + anno+this.nome, this.data)
      .subscribe({
        next: (response) => console.log( alert("inserimento avvenuto con successo"), response),
        error: (error) => console.log(error),
      });
  }
  onclickProf() {
    
   
    this.http
      .post('http://localhost:8080/professori/uploadConFile1',  this.dataProf)
      .subscribe({
        next: (response) => console.log(alert("inserimento avvenuto con successo"), response),
        error: (error) => console.log(error),
      });
  }





  cambio(event: any) {
    this.nome = event.target.value;
    console.log(this.nome);
  }

  cambioSel(e: any) {
    this.visualizza = e;
    console.log(this.visualizza);
  }


  setAnni(){
    let date = new Date();
    this.anno=(date.getFullYear()*2)+1;
    for(let i=this.anno-4;i<=this.anno; i++){
      let app = (i-1)/2;
      let  inizio :string = app.toString().substring(2,4);
      let fin = app+1;
      let fine : string = fin.toString().substring(2,4);
      let annoVis= inizio + "/"+ fine;
      let a :Anni = {value :i, viewValue:annoVis}
      this.anni.push(a)
      i++;
    }
  }

  cambioAnno(e: any) {
    this.anno=e;
    console.log(this.anno)
  }

  ngOnInit(): void {
    this.setAnni()
  }


 

  submitAttForm() {
    if (this.validateYears()) {
      // Puoi eseguire qui le operazioni che desideri con i valori degli anni accademici
      console.log('Anno accademico di inizio:', this.annoAccademicoInizio);
      console.log('Anno accademico di fine:', this.annoAccademicoFine);
      this.onClick()
    } else {
      alert("Controlla gli anni accademici inseriti gli anni devono avere 4 cifre e l'anno inserito sotto deve essere quello sopra + 1.");
    }
  }
  submitIscrForm() {
    if (this.validateYears()) {
      // Puoi eseguire qui le operazioni che desideri con i valori degli anni accademici
      console.log('Anno accademico di inizio:', this.annoAccademicoInizio);
      console.log('Anno accademico di fine:', this.annoAccademicoFine);
      this.onClickIscr()
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
}
