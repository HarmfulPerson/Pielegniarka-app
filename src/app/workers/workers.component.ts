import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Worker} from '../interfaces/worker';
import {PracownicyService} from '../services/pracownicy/pracownicy.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  constructor(private router: Router,
              private httpModule: HttpClient,
              private pracownicyService: PracownicyService
              ) {
  }
  frontWorkers: Worker[] = [];
  displayedColumns: string[] = ['id', 'name', 'surname', 'typeOfAgreement', 'amountOfPatients', 'Available', 'deleteRecord'];
  ngOnInit() {
    this.getWorkers();
  }
  deleteWorker(idFront: number, idBack: string): void {
    this.frontWorkers = this.frontWorkers.splice(idFront, 1);
    this.pracownicyService.deleteWorker(idBack).subscribe(response => {
       this.getWorkers();
     });
  }
  getWorkers() {
    return this.pracownicyService.getWorkers().subscribe(response => {
      this.frontWorkers = JSON.parse(JSON.stringify(response));
    });
  }
}
