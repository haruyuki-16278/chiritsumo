import { Component, EventEmitter, Input, NgZone, Output, SimpleChanges } from '@angular/core';
import { take } from 'rxjs';
import { ConfettiService } from 'src/app/confetti.service';

@Component({
  selector: 'app-level-up',
  templateUrl: './level-up.component.html',
  styleUrls: ['./level-up.component.scss']
})
export class LevelUpComponent {
  @Input() show!: boolean
  @Output() canRemove: EventEmitter<void> = new EventEmitter()


  constructor (
    private zone: NgZone,
    private confetti: ConfettiService
  ) {}

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
