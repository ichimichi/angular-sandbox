import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Habit } from './model/habit';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  habits: Habit[] = [
    {
      id: 1,
      title: 'Check in with parents once a week',
      count: 5,
    },
    {
      id: 2,
      title: 'Record 2 videos per day',
      count: 4,
    },
    {
      id: 3,
      title: 'Work on side project 5 hours/week',
      count: 3,
    },
    {
      id: 4,
      title: 'Write for 20 minutes a day',
      count: 6,
    },
  ];

  private refetchSubject = new Subject();

  refetch(): Observable<any> {
    return this.refetchSubject.asObservable();
  }

  constructor() {}

  getHabits(): Observable<Habit[]> {
    return of(this.habits);
  }

  addHabit(newHabit) {
    newHabit.id = this.habits.length + 1;
    this.habits.push(newHabit);
    this.refetchSubject.next();
  }
}
