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
      iconUrl: 'assets/categories/bunbetu.png',
      name: 'ごみのぶんべつ',
      isComplete: false,
      missions: [
        {
          title: 'もえるごみのなかにトレーがはいっていないかたしかめよう',
          beanKnowledges: ['なっとうのパックはもえるごみ！', 'つまようじがかんたんにささったらリサイクルできるトレーだよ']
        }, {
          title: 'もえるごみのなかにぎゅうにゅうパックがはいっていないかたしかめよう',
          beanKnowledges: ['うらがわがぎんいろだったらじつはもえるゴミなんだよ']
        },
      ]
    }, {
      iconUrl: 'assets/categories/gomidashi.png',
      name: 'ごみだし',
      isComplete: false,
      missions: [
        {
          title: 'だんぼーるをまとめよう',
          beanKnowledges: [
            'あめとゆきのひにはださないでね',
            'だんぼーるはとかしてリサイクルされるよ',
            'だんぼーるはほぼぜんぶリサイクルされているよ'
          ],
        }, {
          title: 'しんぶんしをまとめよう',
          beanKnowledges: ['あめとゆきのひにはださないでね', 'ちらしはざっしといっしょにまとめてね']
        }, {
          title: 'いらないふくをまとめよう',
          beanKnowledges: ['あめとゆきのひにはださないでね', 'まとめたふくはがいこくのひとたちにプレゼントされるよ']
        }, {
          title: 'あきかんをまとめよう',
          beanKnowledges: ['ふたもあきかんといっしょにだそう', 'プルトップははずさずにそのままだそう', 'つぶさずにだそう']
        }
      ]
    }, {
      iconUrl: 'assets/categories/clean.png',
      name: 'おそうじ',
      isComplete: false,
      missions: [
        {
          title: 'リビングにきれいにしよう',
          beanKnowledges: [
            'ぞうきんはえどじだいからつかわれはじめたよ',
            'えひめけんではながいろうかをぞうきんがけするレースがあるよ',
            'ほうきはへいあんじだいからつかわれはじめたよ'
          ]
        }, {
          title: 'じぶんのへやをきれいにしよう',
          beanKnowledges: [
            'ぞうきんはえどじだいからつかわれはじめたよ',
            'えひめけんではながいろうかをぞうきんがけするレースがあるよ',
            'ほうきはへいあんじだいからつかわれはじめたよ'
          ]
        }, {
          title: 'おふろをきれいにしよう',
          beanKnowledges: [
            'ぞうきんはえどじだいからつかわれはじめたよ',
            'えひめけんではながいろうかをぞうきんがけするレースがあるよ',
            'ほうきはへいあんじだいからつかわれはじめたよ'
          ]
        }, 
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
