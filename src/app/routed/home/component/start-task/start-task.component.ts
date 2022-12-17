import { Component, EventEmitter, Input, NgZone, Output, SimpleChanges } from '@angular/core';
import { take, timer } from 'rxjs';
import { Category } from '../../home.interface';

@Component({
  selector: 'app-start-task',
  templateUrl: './start-task.component.html',
  styleUrls: ['./start-task.component.scss']
})
export class StartTaskComponent {
  @Input() category!: Category
  @Input() show!: boolean
  @Output() canRemove: EventEmitter<void> = new EventEmitter()

  constructor (
    private zone: NgZone
  ) {}

  ngOnChanges (changes: SimpleChanges): void {
    if (changes['show'].currentValue === true) {
      this.show = false
      this.zone.onMicrotaskEmpty.pipe(take(1)).subscribe(() => {
        this.show = true
      })
    }
  }

  onStartClick (): void {
    this.canRemove.emit()
  }
}
