import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Worker} from '../../interfaces/worker';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracownicyService {

  constructor(private httpModule: HttpClient
  ) { }
  getWorkers() {
    return this.httpModule.get<Worker[]>
    ('http://localhost:3000/pracownicy', {responseType: 'json'});
  }
  addWorker(newWorker: Worker): Observable<Worker[]> {
    return this.httpModule.post<Worker[]>
    ('http://localhost:3000/pracownicy/nowy-pracownik', newWorker, {responseType: 'json'});
  }
  deleteWorker(id: string) {
    return this.httpModule.delete<Worker[]>
    (`http://localhost:3000/pracownicy/${id}`, {responseType: 'json'});
  }
}
