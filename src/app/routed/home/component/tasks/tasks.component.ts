import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { timer } from 'rxjs';
import { Category } from '../../home.interface';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @ViewChildren('carousel') carousel!: QueryList<ElementRef<HTMLDivElement>>

  @Input() show!: boolean
  @Output() canRemove: EventEmitter<void> = new EventEmitter()
  @Output() clickCategory: EventEmitter<Category> = new EventEmitter()

  categories: Category[] = [
    {
      iconUrl: 'assets/categories/clean.png',
      name: '掃除',
      isComplete: false,
      missions: [
        {
          beanKnowledges: ['豆知識だよー'],
          title: '掃除をしよう！'
        }
      ]
    }, {
      iconUrl: 'assets/categories/senntaku.png',
      name: '分別',
      isComplete: true,
      missions: [
        {
          beanKnowledges: ['ペットボトルはキャップが硬い'],
          title: '分別をする'
        }
      ]
    }
  ]

  ngOnInit (): void {
  }

  onClickCategory (category: Category): void {
    if (!this.isCenterCategory(category)) {
      console.warn('センターにないからだめ')
      return
    }
    if (category.isComplete) {
      console.warn('コンプリート済みだからダメ')
      return
    }
    this.show = false
    timer(400).subscribe(() => {
      this.clickCategory.emit(category)
    })
  }

  // FIXME: NG0100
  isCenterCategory (category: Category): boolean {
    const categoryIndex = this.categories.findIndex(c => c.name === category.name)
    if (categoryIndex < 0) return false
    const categoryElement = this.carousel?.toArray()[categoryIndex]
    if (!categoryElement) return false

    const rect = categoryElement.nativeElement.getBoundingClientRect()

    const centerPos = window.innerWidth / 2
    return rect.x < centerPos && centerPos < rect.x + rect.width
  }
}
