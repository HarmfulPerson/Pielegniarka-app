import { Component, OnInit } from '@angular/core';
import {ZleceniaService} from "../services/zlecenia/zlecenia.service";
import { Zlecenie } from '../interfaces/zlecenie'
import {Moment} from 'moment'
import {PracownicyService} from "../services/pracownicy/pracownicy.service";

@Component({
  selector: 'app-opened-zlecenia',
  templateUrl: './opened-zlecenia.component.html',
  styleUrls: ['./opened-zlecenia.component.css']
})

export class OpenedZleceniaComponent implements OnInit {

  constructor(private zleceniaService: ZleceniaService) { }
  displayedColumns: string[] = ['id', 'name', 'surname', 'madicine', 'daysLeft', 'responsiblePerson', 'deleteRecord' ];
  zlecenia: Zlecenie[] = [];
  date: Date = new Date;
  ngOnInit() {
    this.getZlecenias();
  }
  deleteZlecenie(neededVariables, causeOfDeletion) {
    if (causeOfDeletion === 'time') {
      this.zleceniaService.deleteZlecenie(neededVariables).subscribe(res => {
      })
    } else if (causeOfDeletion === 'instant') {
      this.zleceniaService.deleteZlecenie(neededVariables).subscribe(res => {
        this.getZlecenias();
      })
    }

  }
  getZlecenias() {
    return this.zleceniaService.getZlecenias().subscribe(response => {
      this.zlecenia = JSON.parse(JSON.stringify(response));
      this.zlecenia.map( eachZlecenie => {
        if( (eachZlecenie.daysLeft - this.date.getTime()) > 0) {
          eachZlecenie.daysLeft = Math.floor((((eachZlecenie.daysLeft) - this.date.getTime()) / (24*60*60*1000)));
        } else {
          this.deleteZlecenie({idOfWorker: eachZlecenie.idOfResponsible, idOfZlecenie: eachZlecenie._id, causeofDeletion: 'time' }, 'time')
        }
      });
    });
  }
}

