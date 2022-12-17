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
  selectableIconUrlList: string[] = [
    'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80',
    'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2376&q=80'
  ]
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
