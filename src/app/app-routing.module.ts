import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './componenti/stats/stats.component';
import { DashboardComponent } from './componenti/dashboard/dashboard.component';
import { MappaComponent } from './componenti/mappa/mappa.component';
import { UploadatComponent } from './componenti/uploadat/uploadat.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: '' , component: StatsComponent },
    { path: 'stats' , component: StatsComponent },
    { path: 'map' , component: MappaComponent },
    { path: 'upload' , component : UploadatComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
