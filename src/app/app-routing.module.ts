import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisteredOnlyGuard } from './registered-only.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./routed/login/login.module').then(m => m.LoginModule)
  }, {
    path: 'home',
    loadChildren: () => import('./routed/home/home.module').then(m => m.HomeModule),
    canActivate: [RegisteredOnlyGuard]
  }, {
    path: 'calendar',
    loadChildren: () => import('./routed/calendar/calendar.module').then(m => m.CalendarModule) 
  }, {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
