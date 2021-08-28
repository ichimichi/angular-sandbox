import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Habit } from './model/habit';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  private refetchSubject = new BehaviorSubject(null);

  refetch(): Observable<any> {
    return this.refetchSubject.asObservable();
  }

  constructor(private http: HttpClient) {}

  getHabits(): Observable<Habit[]> {
    return this.http.get<Habit[]>('/api/habits');
  }

  addHabit(newHabit) {
    return this.http
      .post<Habit>('/api/habits', newHabit)
      .pipe(tap(() => this.refetchSubject.next(null)));
  }
}
