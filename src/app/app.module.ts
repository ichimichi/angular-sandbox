import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HabitListComponent } from './habit-list/habit-list.component';
import { HabitItemComponent } from './habit-item/habit-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HabitFormComponent } from './habit-form/habit-form.component';

@NgModule({
  declarations: [AppComponent, HabitListComponent, HabitItemComponent, HabitFormComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
