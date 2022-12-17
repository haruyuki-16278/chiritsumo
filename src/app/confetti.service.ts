import { Injectable } from '@angular/core';
import confetti from 'canvas-confetti'

@Injectable({
  providedIn: 'root'
})
export class ConfettiService {

  constructor() { }

  /**
   * 花吹雪を左右からだす
   */
  confetti() {
    confetti({
      particleCount: 200, // 花吹雪の個数
      spread: 70,
      angle: 60,
      origin: { x: 0, y: 1 } // 左端
    })
    confetti({
      particleCount: 200,
      spread: 70,
      angle: 120,
      origin: { x: 1, y: 1 } // 右端
    })
  }

  /**
   *
   * @param x 星がでるx座標 0 ~ 1 (left ~ right)
   * @param y 星が出るy座標 0 ~ 1 (top ~ bottom)
   * @example this.confetti.star(0.5, 0.8)
   *
   */
  star(x: number, y: number) {
    const defaults = {
      spread: 360, // 360度 ± 22.5度に出現
      ticks: 50,
      gravity: 0,
      startVelocity: 30,
      shapes: ['star'],
      origin: { x, y },
      colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
    };

    confetti({
      ...defaults,
      particleCount: 100,
      scalar: 1.2,
      shapes: ['star']
    })

    confetti({
      ...defaults,
      particleCount: 100,
      scalar: 0.75,
      shapes: ['circle']
    })
  }
}
