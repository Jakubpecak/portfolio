import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LanguageItem } from '../../../core/models/language-item';
import { MenuItem } from '../../../core/models/menu-item';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  activeLink = '';
  @Input() isDesktop!: boolean;
  @Input() isTablet!: boolean;
  @Input() isMobile!: boolean;
  @Input() menuList: MenuItem[] = [];
  @Input() languageList: LanguageItem[] = [];
  @Input() currentLanguage!: string;
  @Output() languageChanged = new EventEmitter<string>();

  trackByMenu(index: number, item: MenuItem) {
    return item.name;
  }

  changeLanguage(language: string) {
    this.currentLanguage = language;
    this.languageChanged.emit(language);
  }
}
