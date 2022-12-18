import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

type Calendar = {
  isFinished: boolean
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  animations: [
    trigger('enter', [
      state('show', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('hidden => show', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class CalendarComponent implements OnInit {
  /**
   * お手伝いレベル
   */
  level = window.localStorage.getItem('otetsudaiLevel') ?? 1

  tiritumo = window.localStorage.getItem('tiritumo') ?? 0

  calendar: Calendar[] = []

  isShow = false

  ngOnInit () {
    for (let i = 0; i < 12; i++) {
      this.calendar.push({isFinished: i < this.tiritumo})
    }
  }

  ngAfterViewInit() {
    // timer(1000).subscribe(() => {
      this.isShow = true
    // })
  }
}
