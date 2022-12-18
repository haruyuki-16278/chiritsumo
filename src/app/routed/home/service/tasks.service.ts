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
      iconUrl: 'assets/categories/bunbetu.png',
      name: 'ごみのぶんべつ[その２]',
      isComplete: false,
      missions: [
        {
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
        }
      ]
    }, {
      iconUrl: 'assets/categories/gomidashi.png',
      name: 'ごみだし[その２]',
      isComplete: false,
      missions: [
        {
          title: 'しんぶんしをまとめよう',
          beanKnowledges: ['あめとゆきのひにはださないでね', 'ちらしはざっしといっしょにまとめてね']
        }
      ]
    }　,{
      iconUrl: 'assets/categories/gomidashi.png',
      name: 'ごみだし[その３]',
      isComplete: false,
      missions: [
        {
          title: 'いらないふくをまとめよう',
          beanKnowledges: ['あめとゆきのひにはださないでね', 'まとめたふくはがいこくのひとたちにプレゼントされるよ']
        }
      ]
    },{
      iconUrl: 'assets/categories/gomidashi.png',
      name: 'ごみだし[その4]',
      isComplete: false,
      missions: [
        {
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
        }
      ]
    }, {
      iconUrl: 'assets/categories/clean.png',
      name: 'おそうじ[その２]',
      isComplete: false,
      missions: [
        {
          title: 'じぶんのへやをきれいにしよう',
          beanKnowledges: [
            'ぞうきんはえどじだいからつかわれはじめたよ',
            'えひめけんではながいろうかをぞうきんがけするレースがあるよ',
            'ほうきはへいあんじだいからつかわれはじめたよ'
          ]
        }
      ]
    }, {
      iconUrl: 'assets/categories/clean.png',
      name: 'おそうじ[その３]',
      isComplete: false,
      missions: [
        {
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
