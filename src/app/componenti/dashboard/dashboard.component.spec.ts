import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';


/*
describe('DashboardComponent', () => { ... });: Questa è una dichiarazione di un gruppo di test, che definisce un insieme di test per il componente DashboardComponent.

let component: DashboardComponent;: Dichiarazione di una variabile component di tipo DashboardComponent, che rappresenterà un'istanza 
del componente.

let fixture: ComponentFixture<DashboardComponent>;: Dichiarazione di una variabile fixture di tipo ComponentFixture<DashboardComponent>,
 che rappresenterà un oggetto di fixture per il componente.

beforeEach(async () => { ... });: Questa è una funzione di inizializzazione che viene eseguita prima di ogni test. Viene utilizzata 
per configurare l'ambiente di testing. Nel caso specifico, viene configurato il modulo di test utilizzando 
TestBed.configureTestingModule() e vengono dichiarati i componenti da testare (DashboardComponent). 
La funzione compileComponents() viene utilizzata per compilare i componenti.

beforeEach(() => { ... });: Questa è un'altra funzione di inizializzazione che viene eseguita prima di ogni test. 
In questo caso, viene creata un'istanza del componente utilizzando TestBed.createComponent(). Questo istanzia il componente e 
fornisce un oggetto fixture che può essere utilizzato per testare e manipolare il componente.

it('should create', () => { ... });: Questo è un singolo test che verifica se il componente è stato creato correttamente. 
Utilizza la funzione expect() di Jasmine per asserire che la variabile component sia "truthy", cioè che non sia null, undefined, 
false, 0, NaN, o una stringa vuota. Se la variabile component è stata inizializzata correttamente, il test passerà. Altrimenti, fallirà.
*/

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
