import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HabitService } from '../habit.service';
import { Habit } from '../model/habit';

@Component({
  selector: 'app-habit-list',
  template: `
    <h2>Habits</h2>
    <app-habit-form (addHabit)="onAddHabit($event)"></app-habit-form>
    <ul>
      <app-habit-item
        *ngFor="let habit of habits | async"
        [habit]="habit"
      ></app-habit-item>
    </ul>
  `,
  styles: [],
})
export class HabitListComponent implements OnInit {
  habits: Observable<Habit[]>;

  constructor(private habitService: HabitService) {}

  ngOnInit(): void {
    this.habits = this.habitService.refetch().pipe(
      switchMap(() =>
        this.habitService.getHabits().pipe(
          map((habits) => {
            return habits.map((habit) => {
              habit.streak = habit.count > 5 ? true : false;
              return habit;
            });
          })
        )
      )
    );
  }

  onAddHabit(newHabit) {
    this.habitService.addHabit(newHabit).subscribe();
  }
}
