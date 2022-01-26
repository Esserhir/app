import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagementRessourcesComponent } from './management-ressources/management-ressources.component';
import { DashboardItIsComponent } from './dashboard-it-is/dashboard-it-is.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { CongeComponent } from './conge/conge.component';
import { CongesDemandesComponent } from './management-ressources/conges-demandes/conges-demandes.component';
import { EmployersArchivesComponent } from './management-ressources/employers-archives/employers-archives.component';
import { HomeComponent } from './management-ressources/home/home.component';
import { ReunionComponent } from './management-ressources/reunion/reunion.component';
import { InternComponent } from './management-ressources/intern/intern.component';
import { TachesComponent } from './management-ressources/taches/taches.component';
import { RMComponent } from './management-ressources/rm/rm.component';
import { ContactsComponent } from './management-ressources/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagementRessourcesComponent,
    DashboardItIsComponent,
    DashboardComponent,
    EmployeeComponent,
    CongeComponent,
    CongesDemandesComponent,
    EmployersArchivesComponent,
    HomeComponent,
    ReunionComponent,
    InternComponent,
    TachesComponent,
    RMComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
