import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Patient} from '../../interfaces/patient';
import {Observable} from 'rxjs';
import {Worker} from "../../interfaces/worker";
import {Disease} from "../../interfaces/disease";

@Injectable({
  providedIn: 'root'
})
export class PacjenciService {

  constructor(private httpModule: HttpClient) { }
  getPatients() {
    const patients: Observable<Patient[]> = this.httpModule.get<Patient[]>
    ('http://localhost:3000/pacjenci',{responseType: 'json'} );
    return patients;
  }
  addPatient(newPatient: Patient): Observable<Patient[]> {
    return this.httpModule.post<Patient[]>
    ('http://localhost:3000/pacjenci/nowy-pacjent', newPatient, {responseType: 'json'});
  }
  deletePacjent(id: string) {
    return this.httpModule.delete<Patient[]>
    (`http://localhost:3000/pacjenci/${id}`, {responseType: 'json'});
  }
  getDiseaseHistory(id: string): Observable<Disease[]> {
    return this.httpModule.get<Disease[]>
    (`http://localhost:3000/pacjenci/${id}`, {responseType: 'json'});
  }
}
