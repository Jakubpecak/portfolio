import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<string>(
    this.getCurrentLanguage()
  );
  language$ = this.languageSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  setLanguage(language: string) {
    localStorage.setItem('language', language);
    this.languageSubject.next(language);
  }

  getCurrentLanguage(): string {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('language') || 'en';
    }
    return 'en';
  }
}
