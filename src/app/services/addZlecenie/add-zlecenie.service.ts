import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AddZlecenie} from '../../interfaces/add-zlecenie';

@Injectable({
  providedIn: 'root'
})
export class AddZlecenieService {

  constructor(private httpModule: HttpClient) { }

  AddZlecenie(newZlecenie: AddZlecenie): Observable<AddZlecenie[]> {
    console.log(newZlecenie);
    return this.httpModule.post<AddZlecenie[]>
    ('http://localhost:3000/dodaj-zlecenie', newZlecenie, {responseType: 'json'});
  }
}
