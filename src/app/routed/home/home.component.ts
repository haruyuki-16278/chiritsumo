import { ChangeDetectorRef, Component } from '@angular/core';
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
  showResultScreen = false
  showLvUpDialog = false

  showingCategory: Category | undefined

  constructor (
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit (): void {
  }

  onClickCategory (category: Category): void {
    this.showCategoriesScreen = false
    this.showStartScreen = true
    this.showHelpScreen = false
    this.showResultScreen = false
    this.showingCategory = category
    this.cdRef.detectChanges()
  }

  backToCategoryScreen (): void {
    this.showCategoriesScreen = true
    this.showStartScreen = false
    this.showHelpScreen = false
    this.showResultScreen = false
  }

  closeStartScreen (): void {
    this.showHelpScreen = true
    timer(500).subscribe(() => {
      this.showCategoriesScreen = false
      this.showStartScreen = false
      this.showResultScreen = false
      this.cdRef.detectChanges()
    })
  }

  closeHelpScreen (): void {
    this.showResultScreen = true
    this.cdRef.detectChanges()
    timer(500).subscribe(() => {
      this.showCategoriesScreen = false
      this.showStartScreen = false
      this.showHelpScreen = false
      this.cdRef.detectChanges()
    })
  }

  closeResultScreen (): void {
    this.showCategoriesScreen = true
    this.showStartScreen = false
    this.showHelpScreen = false
    this.showResultScreen = false
    this.cdRef.detectChanges()

    const tiritumo = Number(window.localStorage.getItem('tiritumo'))
    if (typeof(tiritumo) !== 'number' && tiritumo === tiritumo) return
    if (tiritumo % 4 === 0) {
      this.levelUp()
    }
  }

  closeLevelUpDialog (): void {
    this.showLvUpDialog = false
  }

  private levelUp (): void {
    const otetsudaiLevel = Number(window.localStorage.getItem('otetsudaiLevel'))
    if (typeof(otetsudaiLevel) !== 'number' && otetsudaiLevel === otetsudaiLevel) return
    window.localStorage.setItem('otetsudaiLevel', (otetsudaiLevel+1).toString())

    this.showLvUpDialog = true
  }
}
