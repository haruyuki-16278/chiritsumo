import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-start-task',
  templateUrl: './start-task.component.html',
  styleUrls: ['./start-task.component.scss']
})
export class StartTaskComponent {
  @Output() canRemove: EventEmitter<void> = new EventEmitter()
}
