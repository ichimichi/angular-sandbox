import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { data } from './data';
import { Item, System } from './system';

@Injectable({
  providedIn: 'root',
})
export class SystemService {
  constructor() {}

  getSystemDetail(id: number): Observable<System> {
    return of(data.systems[id]);
  }

  getSystemInfo(id: number): Observable<string> {
    return of(data.systems[id].info);
  }

  getSystemItems(id: number): Observable<Item[]> {
    return of(data.systems[id].items);
  }
}
