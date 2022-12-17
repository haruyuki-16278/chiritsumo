import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { Category } from './home.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showCategoriesScreen = true
  showStartScreen = false
  showHelpScreen = false
  showingCategory: Category | undefined

  onClickCategory (category: Category): void {
    this.showCategoriesScreen = false
    this.showStartScreen = true
    this.showHelpScreen = false
    this.showingCategory = category
  }

  closeStartScreen (): void {
    this.showCategoriesScreen = false
    this.showStartScreen = false
    this.showHelpScreen = true
  }

  closeHelpScreen (): void {
    timer(400).subscribe(() => {
      this.showCategoriesScreen = false
      this.showStartScreen = false
      this.showHelpScreen = false
    })
  }
}
