import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-habit-list',
  template: `
    <h2>Habits</h2>
    <form [formGroup]="habitForm" (ngSubmit)="onSubmit(habitForm.value)">
      <input type="text" placeholder="Add habit" formControlName="title" />
      <button type="submit">Add</button>
    </form>
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

  habitForm;

  constructor(private formBuilder: FormBuilder) {
    this.habitForm = this.formBuilder.group({
      title: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit(newHabit) {
    newHabit.id = this.habits.length + 1;
    this.habits.push(newHabit);
    this.habitForm.reset();
  }
}
