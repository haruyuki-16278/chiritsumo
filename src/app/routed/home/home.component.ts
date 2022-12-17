import { Component } from '@angular/core';
import { Category } from './home.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showCategoriesScreen = true
  showStartScreen = false
  showingCategory: Category | undefined

  onClickCategory (category: Category): void {
    this.showCategoriesScreen = false
    this.showStartScreen = true
    this.showingCategory = category
  }

  closeStartScreen (): void {
    this.showStartScreen = false
  }
}
