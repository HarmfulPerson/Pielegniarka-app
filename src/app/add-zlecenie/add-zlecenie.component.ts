import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Patient} from '../interfaces/patient';
import {Worker} from '../interfaces/worker';
import {PacjenciService} from '../services/pacjenci/pacjenci.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, ReplaySubject} from 'rxjs';
import {MatSelect} from '@angular/material';
import {map, startWith} from 'rxjs/operators';
import {PracownicyService} from '../services/pracownicy/pracownicy.service';
import {NgForm} from '@angular/forms';
import {AddZlecenieService} from '../services/addZlecenie/add-zlecenie.service';

@Component({
  selector: 'app-add-zlecenie',
  templateUrl: './add-zlecenie.component.html',
  styleUrls: ['./add-zlecenie.component.css']
})
export class AddZlecenieComponent implements OnInit {

  constructor(private router: Router,
              private pacjenciService: PacjenciService,
              private pracownicyService: PracownicyService,
              private addZlecenieSeervice: AddZlecenieService) {
  }
  summaries: string[] = ['a', 'b', 'c'];

  patientNames: SimpleSystemUser[] = [];
  workerNames: SimpleSystemUser[] = [];

  filteredPatients: Observable<SimpleSystemUser[]>;
  filteredWorkers: Observable<SimpleSystemUser[]>;

  pracownicy: Worker[] = [];
  pacjenci: Patient[] = [];

  jedenPacjent = {
    imie: null,
  };
  newZlecenie = new FormGroup ({
    controlPatients: new FormControl('',[Validators.required]),
    choroba: new FormControl('',[Validators.required]),
    lek: new FormControl('',[Validators.required]),
    dni: new FormControl('',[Validators.required]),
    controlWorkers: new FormControl('',[Validators.required]),
  });
  ngOnInit() {
    this.getPatients();
    this.getWorkers();
    this.filteredPatients = this.newZlecenie.get('controlPatients').valueChanges.pipe(
      startWith(''),
      map(value => this._filterPatients(value))
    );
  }
  getErrorMessage(field: string): string {
    if (this.newZlecenie.get(field).hasError('required')) {
      return 'Musisz wprowadzić wartość';
    }
  }
  private _filterPatients(value: string): SimpleSystemUser[] {
      if (typeof value === 'string') {
        const filterValue = value.toLowerCase();
        let filtered: SimpleSystemUser[] = [];
        this.patientNames.filter(patient => {
          if(patient.name.toLowerCase().includes(filterValue) || patient.surname.toLowerCase().includes(filterValue)){filtered.push(patient)}
             patient.name.toLowerCase().includes(filterValue)
        });
        if(filtered.length === 0) {
          return this.patientNames;
        } else {
          return filtered;
        }
      }
  }
  private _filterWorkers(value: string): SimpleSystemUser[] {
    if (typeof value === 'string') {
      const filterValue = value.toLowerCase();
      let filtered: SimpleSystemUser[] = [];
      this.workerNames.filter(worker => {
        if(worker.name.toLowerCase().includes(filterValue) || worker.surname.toLowerCase().includes(filterValue)){filtered.push(worker)}
        worker.name.toLowerCase().includes(filterValue)
      });
      if(filtered.length === 0) {
        return this.patientNames;
      } else {
        return filtered;
      }
    }
  }
  createNewZlecenie() {
    if (this.newZlecenie.valid) {
      const postZlecenie = {
        idOfPatient: this.newZlecenie.get('controlPatients').value.id,
        choroba: this.newZlecenie.get('choroba').value,
        lek: this.newZlecenie.get('lek').value,
        dni: this.newZlecenie.get('dni').value,
        idOfWorker: this.newZlecenie.get('controlWorkers').value.id
      };
      this.addZlecenieSeervice.AddZlecenie(postZlecenie).subscribe()
    }
    setTimeout(()=>{this.router.navigate(['/otwarte-zlecenia'])}, 100);

  }
  displayPatients(patient) {
    return patient ? patient.name + ' ' + patient.surname : undefined;
  }
  displayWorkers(worker) {
    return worker ? worker.name + ' ' + worker.surname : undefined;
  }
  getPatients() {
    return this.pacjenciService.getPatients().subscribe(response => {
      this.pacjenci = JSON.parse(JSON.stringify(response));
      this.pacjenci.forEach(item => {
        const onePatient = {
          id: item._id,
          name: item.name.toLowerCase(),
          surname: item.surname.toLowerCase()
        };
        this.patientNames.push(onePatient);
      });
    });
  }
  getWorkers() {
    return this.pracownicyService.getWorkers().subscribe(response => {
      this.pracownicy = JSON.parse(JSON.stringify(response));
      this.pracownicy.forEach(item => {
        const oneWorker = {
          id: item._id,
          name: item.name.toLowerCase(),
          surname: item.surname.toLowerCase()
        };
        this.workerNames.push(oneWorker);
        this.filteredWorkers = this.newZlecenie.get('controlWorkers').valueChanges.pipe(
          startWith(''),
          map(value => this._filterWorkers(value))
        );
      });
    });
  }
}
interface SimpleSystemUser {
  id: string;
  name: string;
  surname: string;
}
