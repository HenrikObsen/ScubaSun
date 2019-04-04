import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { KurserComponent } from './kurser/kurser.component';
//import { ContactComponent } from './contact/contact.component';
//import { HoldstartComponent } from './holdstart/holdstart.component';
//import { ProduktComponent } from './produkt/produkt.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },  
    { path: 'home', component: HomeComponent},
   // { path: 'contact', component: ContactComponent},
    //{ path: 'holdstart', component: HoldstartComponent},
    //{ path: 'kurser', component: KurserComponent},
    //{ path: 'produkt/:id', component: ProduktComponent},  
    { path: '**', component: HomeComponent }

];
//<li *ngFor="let prod of data" routerLinkActive="active" class="mobileMenuItem"><a [routerLink]="['/produkt', prod.ID]">{{prod.Name}}</a></li>

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

