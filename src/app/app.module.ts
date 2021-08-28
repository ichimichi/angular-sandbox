import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SystemDetailComponent } from './system-detail/system-detail.component';
import { SystemInfoComponent } from './system-info/system-info.component';
import { SystemItemsComponent } from './system-items/system-items.component';

const routes: Routes = [
  {
    path: 'system/:id',
    component: SystemDetailComponent,
    children: [
      {
        path: 'info',
        component: SystemInfoComponent,
      },
      {
        path: 'items',
        component: SystemItemsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SystemDetailComponent,
    SystemInfoComponent,
    SystemItemsComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
