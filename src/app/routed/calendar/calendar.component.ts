import { Component, OnInit } from '@angular/core';

type Calendar = {
  isFinished: boolean
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  /**
   * お手伝いレベル
   */
  level = window.localStorage.getItem('otetsudaiLevel') ?? 1

  tiritumo = window.localStorage.getItem('tiritumo') ?? 0

  calendar: Calendar[] = []

  ngOnInit () {
    for (let i = 0; i < 12; i++) {
      this.calendar.push({isFinished: i < this.tiritumo})
    }
  }
}
