import { Component, OnInit } from '@angular/core';

interface Category {
  iconUrl: string
  name: string
  isComplete: boolean
  missions: {
    beanKnowledges: string[]
    title: string
  }[]
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  categories: Category[] = [
    {
      iconUrl: 'hoge',
      name: '掃除',
      isComplete: false,
      missions: [
        {
          beanKnowledges: ['豆知識だよー'],
          title: '掃除をしよう！'
        }
      ]
    }, {
      iconUrl: 'hoge',
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

}
