import { Component, OnInit } from '@angular/core';

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
export class HabitListComponent implements OnInit {
  habits = [
    {
      id: 1,
      title: 'Check in with parents once a week',
    },
    {
      id: 2,
      title: 'Record 2 videos per day',
    },
    {
      id: 3,
      title: 'Work on side project 5 hours/week',
    },
    {
      id: 4,
      title: 'Write for 20 minutes a day',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onAddHabit(newHabit) {
    newHabit.id = this.habits.length + 1;
    this.habits.push(newHabit);
  }
}
