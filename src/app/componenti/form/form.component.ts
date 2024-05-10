
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, toArray } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
    selector: 'app-Form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
  })
export class FormdatComponent implements OnInit{
  //showAdminForm: boolean = false;
  items: string[]=[];
  item:string='';
  private nome: string = '';
  private cognome: string = '';
  private visualizza: string = '';
   selectedItem: string='';


 constructor(private route: ActivatedRoute,private http : HttpClient) {
  /* this.route.url.subscribe(urlSegments => {
      this.showAdminForm = urlSegments.some(segment => segment.path === 'admin');
    });
  */
  }

  ngOnInit(): void {
    
 
  }

  showDropdown: boolean = false;

  toggleDropdown() {
    let array=this.getPendingActivities();
    array.subscribe(
      (result: string[]) => {
        
        this.items=result; 
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
 
  InviaIscrizione():void{
    const nome:string=this.nome;
    const cognome:string=this.cognome;
    const filepath:string=this.visualizza;
    console.log(nome);
    console.log(cognome);
    console.log(this.visualizza);
    let body = { nome,cognome,filepath};
    

    this.http
      .post('http://localhost:8080/studente/addIscrizione1',body)
      .subscribe({
        next: (response) => console.log(alert("inserimento avvenuto con successo"), response),
        error: (error) => console.log(error),
      });
  }



  
  cambioNome(event: any) {
    this.nome = event.target.value;
    
  }
  cambioCognome(event: any) {
    this.cognome = event.target.value;
    
  }

  selectItem(event: any) {
  
this.visualizza=event.target.value;
  }
  onSelectionChange(event:any) {
 this.visualizza=event.target.value;

  }



}