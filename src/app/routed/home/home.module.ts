import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { StartTaskComponent } from './component/start-task/start-task.component';
import { HelpComponent } from './component/help/help.component';
import { ResultComponent } from './component/result/result.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    StartTaskComponent,
    HelpComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IvyCarouselModule
  ]
})
export class HomeModule { }
