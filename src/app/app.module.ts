import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddZlecenieComponent } from './add-zlecenie/add-zlecenie.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule, MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { OpenedZleceniaComponent } from './opened-zlecenia/opened-zlecenia.component';
import { PatientsComponent } from './patients/patients.component';
import { WorkersComponent } from './workers/workers.component';
import { NewWorkerComponent } from './new-worker/new-worker.component';
import {HttpClientModule} from '@angular/common/http';
import { NewPatientComponent } from './patients/new-patient/new-patient.component';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {AutoCompleteModule} from 'primeng';
import { PatientDiseaseComponent } from './patients/patientsDisease/patient-disease/patient-disease.component';

@NgModule({
  declarations: [
    AppComponent,
    AddZlecenieComponent,
    OpenedZleceniaComponent,
    PatientsComponent,
    WorkersComponent,
    NewWorkerComponent,
    NewPatientComponent,
    PatientDiseaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
