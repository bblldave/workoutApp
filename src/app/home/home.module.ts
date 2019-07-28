import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

import { HomePage } from './home.page';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'timer',
        component: TimerComponent
      }
    ]),
    NgCircleProgressModule.forRoot({
      radius: 100,
      percent: 50,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
      animation: true,
      responsive: true,
      renderOnClick: false
    }),
    RoundProgressModule
  ],
  declarations: [
    HomePage,
    TimerComponent]
})
export class HomePageModule {}
