import { Component, EventEmitter, Input, NgZone, Output, SimpleChanges } from '@angular/core';
import { take, timer } from 'rxjs';
import { ConfettiService } from 'src/app/confetti.service';

@Component({
  selector: 'app-level-up',
  templateUrl: './level-up.component.html',
  styleUrls: ['./level-up.component.scss']
})
export class LevelUpComponent {
  @Input() show!: boolean
  @Output() canRemove: EventEmitter<void> = new EventEmitter()
  level: any

  constructor (
    private zone: NgZone,
    private confetti: ConfettiService
  ) {}

  ngOnInit (): void {
    this.level = window.localStorage.getItem('otetsudaiLevel')
    this.confetti.confetti()
    timer(600, 400).pipe(take(4)).subscribe(() => {
      this.confetti.star(Math.random(), Math.random())
    }, () => {}, () => {
      timer(1000).subscribe(() => {
        this.show = false
        timer(400).subscribe(() => {
          this.canRemove.emit()
        })
      })
    })
  }

  ngOnChanges (changes: SimpleChanges): void {
    if (changes['show'].currentValue === true) {
      this.show = false
      window.setTimeout(() => {
        this.show = true
      })
      this.zone.onMicrotaskEmpty.pipe(take(1)).subscribe(() => {
        this.show = true
      })
    }
  }
}
