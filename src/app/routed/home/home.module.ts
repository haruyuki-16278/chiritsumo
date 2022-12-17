import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IvyCarouselModule
  ]
})
export class HomeModule { }
