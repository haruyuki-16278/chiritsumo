import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name: string = ''
  iconUrl : string = ''
  otetsudaiLevel: number = 1

  ngOnInit () {
    this.name = window.localStorage.getItem('name') ?? '';
    this.iconUrl = window.localStorage.getItem('iconUrl') ?? '';
    this.otetsudaiLevel = Number(window.localStorage.getItem('otetsudaiLevel')) ?? 1;
  }
}
