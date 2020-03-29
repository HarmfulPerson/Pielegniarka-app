import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddZlecenieComponent} from './add-zlecenie/add-zlecenie.component';
import {OpenedZleceniaComponent} from './opened-zlecenia/opened-zlecenia.component';
import {PatientsComponent} from './patients/patients.component';
import {WorkersComponent} from './workers/workers.component';
import {NewWorkerComponent} from './new-worker/new-worker.component';
import {NewPatientComponent} from './patients/new-patient/new-patient.component';
import {PatientDiseaseComponent} from "./patients/patientsDisease/patient-disease/patient-disease.component";

const routes: Routes = [
  { path: 'dodaj-zlecenie', component: AddZlecenieComponent },
  { path: 'otwarte-zlecenia', component: OpenedZleceniaComponent },
  { path: 'pacjenci', component: PatientsComponent },
  { path: 'pracownicy', component: WorkersComponent },
  { path: 'pracownicy/nowy-pracownik', component: NewWorkerComponent },
  { path: 'pacjenci/nowy-pacjent', component: NewPatientComponent },
  { path: 'pacjenci/:id', component: PatientDiseaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
