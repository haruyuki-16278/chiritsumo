import { Component, EventEmitter, Input, NgZone, Output, SimpleChanges } from '@angular/core';
import { take, timer } from 'rxjs';
import { Category } from '../../home.interface';
import { ConfettiService } from 'src/app/confetti.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() category!: Category
  @Input() show!: boolean
  @Output() canRemove: EventEmitter<void> = new EventEmitter()

  showStamp = false

  stampUrl = ''

  constructor (
    private zone: NgZone,
    private confetti: ConfettiService
  ) {}

  ngOnInit (): void {
    const stamps = ['cat', 'chiritsumo', 'dog', 'muscle', 'nico', 'popper', 'start'].map(v => `assets/stamps/${v}.png`)
    this.stampUrl = stamps[Math.floor(Math.random() * stamps.length)]
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

  ngAfterViewInit (): void {
    timer(400).subscribe(() => {
      this.confetti.confetti()
      timer(0, 300).pipe(take(4)).subscribe(() => {
        this.confetti.star(Math.random(), Math.random())
      }, () => {}, () => {
        timer(1000).subscribe(() => {
          this.showStamp = true
          timer(1500).subscribe(() => {
            this.show = false
            timer(400).subscribe(() => {
              this.canRemove.emit()
            })
          })
        })
      })
    })
  }
}
