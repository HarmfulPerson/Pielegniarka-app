import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PacjenciService} from "../../../services/pacjenci/pacjenci.service";
import {Disease} from "../../../interfaces/disease";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-patient-disease',
  templateUrl: './patient-disease.component.html',
  styleUrls: ['./patient-disease.component.css']
})

export class PatientDiseaseComponent implements OnInit {

  constructor(private httpModule: HttpClient,
              private pacjenciService: PacjenciService,
              private route: ActivatedRoute) {
  }
  todaysDate: Date = new Date;
  private routeSub: Subscription;
  idOfPatient: string;

  diseases: Disease[] = [];
  displayedColumns: string[] = ['id', 'startedAt', 'days', 'takenMedicine', 'typeOfDisease', 'inProgress'];


  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.idOfPatient = params['id'];
    });
    this.getDiseases(this.idOfPatient)
  }
   returnProperDate(days) {
    return days*60*60*1000*24;
  }
  addDays(date, days): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  convertDate(date) {
    const splittedDate = date.split('');
    splittedDate.map((letter, i) => {
      if(letter === 'T') {
        splittedDate.splice(i)
      }
    });
    return splittedDate.join('').split('-').reverse().join('-');
  }
  getDiseases(id) {
    return this.pacjenciService.getDiseaseHistory(id).subscribe(response => {
      response.map(disease => {
        disease.inProgress = (this.addDays(disease.startedAt, disease.daysOfTreatment)).getTime() > this.todaysDate.getTime();
        disease.startedAt = this.convertDate(disease.startedAt.toString());
      });
      this.diseases = JSON.parse(JSON.stringify(response));
    });
  }
}
