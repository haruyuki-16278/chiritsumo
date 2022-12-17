import { Component } from '@angular/core';

type Calendar = {
  isFinished: boolean
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  /**
   * お手伝いレベル
   */
  level = 1
  
  calendar: Calendar[] = [{
    isFinished: true
  }, {
    isFinished: true
  }, {
    isFinished: true
  }, {
    isFinished: false
  }, {
    isFinished: false
  }, {
    isFinished: false
  }, {
    isFinished: false
  }, {
    isFinished: false
  }, {
    isFinished: false
  }, {
    isFinished: false
  }, {
    isFinished: false
  }, {
    isFinished: false
  }]
}
