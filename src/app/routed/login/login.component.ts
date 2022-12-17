import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /* 名前 */
  name: string = ''
  /* アイコン */
  iconUrl: string = ''
  /* 選択可能なアイコンのurlのリスト */
  selectableIconUrlList: string[] = ['1', '2', '3']
  /* 名の入力済みフラグ */
  nameEntered: boolean = false

  constructor (
    private readonly router: Router
  ) {}

  ngOnInit () {}

  onClickEnterNameDone () {
    window.localStorage.setItem('name', this.name)
    this.nameEntered = true
  }

  onClickIcon (iconUrl: string) {
    this.iconUrl = iconUrl
  }

  onClickSelectIconDone () {
    window.localStorage.setItem('iconUrl', this.iconUrl)
    this.router.navigate(['/home'])
  }
}
