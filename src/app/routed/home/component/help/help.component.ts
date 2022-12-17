import { Component, EventEmitter, Input, NgZone, Output, SimpleChanges } from '@angular/core';
import { take } from 'rxjs';
import { Category, Mission } from '../../home.interface';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent {
  @Input() category!: Category
  @Input() show!: boolean
  @Output() canRemove: EventEmitter<void> = new EventEmitter()

  mission!: Mission

  constructor (
    private zone: NgZone
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

  ngOnInit (): void {
    const random = Math.floor(Math.random() * this.category.missions.length)
    this.mission = this.category.missions[random]
    console.log(this.mission)
  }

  onEndClick (): void {
    this.canRemove.emit()
  }
}