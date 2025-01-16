import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { LanguageItem } from '../../../../core/models/language-item';
import { MenuItem } from '../../../../core/models/menu-item';
import { MobileNavListComponent } from './mobile-nav-list/mobile-nav-list.component';

@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrl: './bottom-navigation.component.scss',
})
export class BottomNavigationComponent {
  currentLanguage: string = 'en';
  @Input() menuList: MenuItem[] = [];
  @Input() languageList: LanguageItem[] = [];
  @Input() isAtBottom: boolean = false;
  @Output() languageChanged = new EventEmitter<string>();

  constructor(private bottomSheet: MatBottomSheet) {}

  changeLanguage(language: string) {
    this.currentLanguage = language;
    this.languageChanged.emit(language);
  }

  openBottomSheet(): void {
    this.bottomSheet.open(MobileNavListComponent, {
      data: { menuList: this.menuList },
    });
  }
}
