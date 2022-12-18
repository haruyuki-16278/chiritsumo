import { Injectable } from '@angular/core';
import { Category } from '../home.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  restore (): void {
    const d = new Date()
    const dateKey = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
    const jsonString = window.localStorage.getItem(`categories-${dateKey}`)
    if (!jsonString) return
    this.categories = JSON.parse(jsonString)
  }

  save (): void {
    const d = new Date()
    const dateKey = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
    window.localStorage.setItem(`categories-${dateKey}`, JSON.stringify(this.categories))
  }

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
}
