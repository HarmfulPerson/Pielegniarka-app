import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {PacjenciService} from "../../services/pacjenci/pacjenci.service";

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {

  constructor(private pacjenciService: PacjenciService) { }

  ngOnInit() {
  }
  onAddNewPatient(form) {
    form.value.diseaseHistory = [];
    this.pacjenciService.addPatient(form.value).subscribe();
  }
}
