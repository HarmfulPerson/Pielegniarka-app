import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Worker} from '../interfaces/worker';
import {NgForm} from '@angular/forms';
import {PracownicyService} from '../services/pracownicy/pracownicy.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-new-worker',
  templateUrl: './new-worker.component.html',
  styleUrls: ['./new-worker.component.css']
})
export class NewWorkerComponent implements OnInit {
  constructor(private router: Router,
              private pracownicyService: PracownicyService
) { }
  currentWorkers = this.pracownicyService.getWorkers();
  id = null;
  imie = '';
  nazwisko = '';
  typUmowy = '';
  ngOnInit() {
      this.currentWorkers.subscribe(response => {
      this.id = response.length;
    });
  }
  onAddNewWorker(form: NgForm) {
    const  newWorker: Worker = {
      name: form.value.imie,
      surname: form.value.nazwisko,
      typUmowy: form.value.typUmowy,
      iloscPacjentow: 0,
      dostepnosc: true,
    };
    if (form.valid) {
      this.pracownicyService.addWorker(newWorker).subscribe();
      this.router.navigate(['/pracownicy']);
    }
    }
}
