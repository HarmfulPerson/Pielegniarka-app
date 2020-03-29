import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {PacjenciService} from '../services/pacjenci/pacjenci.service';
import {Patient} from '../interfaces/patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  constructor(private router: Router,
              private httpModule: HttpClient,
              private pacjenciService: PacjenciService) {
  }
  patients: Patient[] = [];
  displayedColumns: string[] = ['id', 'name', 'surname', 'age', 'address', 'diseaseHistory', 'AddDisease', 'deleteRecord'];
  ngOnInit() {
    this.getPatients();
  }
  onPatientDelete(id) {
    return this.pacjenciService.deletePacjent(id).subscribe(() => {
      this.getPatients();
    });
  }
  navigateToZlecenie() {
    this.router.navigate(['/dodaj-zlecenie'])
  }
  getPatients() {
    return this.pacjenciService.getPatients().subscribe(response => {
      this.patients = JSON.parse(JSON.stringify(response));
    });
  }
}
