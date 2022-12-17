import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.setTiritumo()
  }

  /**
   * ちりつもスタンプの数をセットします
   * 初回時は0にセットします
   */
  private setTiritumo(): void {
    const tiritumo = window.localStorage.getItem('tiritumo')
    console.log(tiritumo)
    if (tiritumo) return
    window.localStorage.setItem('tiritumo', '0')
  }
}
