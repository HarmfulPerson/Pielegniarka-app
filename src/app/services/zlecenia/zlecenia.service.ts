import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Zlecenie} from "../../interfaces/zlecenie";
import {Worker} from "../../interfaces/worker";

@Injectable({
  providedIn: 'root'
})
export class ZleceniaService {

  constructor(private httpModule: HttpClient) {}

  getZlecenias() {
    return this.httpModule.get<Zlecenie[]>
    ('http://localhost:3000/otwarte-zlecenia', {responseType: 'json'});
  }
  deleteZlecenie(ids) {
    return this.httpModule.request('DELETE', 'http://localhost:3000/otwarte-zlecenia', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: { ids }
    });
  }
}
