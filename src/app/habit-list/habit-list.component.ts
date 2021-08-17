import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HabitService } from '../habit.service';

@Component({
  selector: 'app-habit-list',
  template: `
    <h2>Habits</h2>
    <app-habit-form (addHabit)="onAddHabit($event)"></app-habit-form>
    <ul>
      <app-habit-item
        *ngFor="let habit of habits"
        [habit]="habit"
      ></app-habit-item>
    </ul>
  `,
  styles: [],
})
export class HabitListComponent implements OnInit, OnDestroy {
  habits: Observable<any>;
  habitSubscription: Subscription;

  constructor(private habitService: HabitService) {}

  ngOnInit(): void {
    this.habitSubscription = this.habitService
      .getHabits()
      .subscribe((habits) => {
        this.habits = habits;
      });
  }

  ngOnDestroy(): void {
    this.habitSubscription.unsubscribe();
  }

  onAddHabit(newHabit) {
    this.habitService.addHabit(newHabit);
  }
}
