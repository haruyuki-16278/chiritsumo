import { Component, EventEmitter, Input, Output } from '@angular/core';
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
}
