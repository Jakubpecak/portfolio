import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  private isDesktopSubject = new BehaviorSubject<boolean>(false);
  private isTabletSubject = new BehaviorSubject<boolean>(false);
  private isMobileSubject = new BehaviorSubject<boolean>(false);
  isDesktop$ = this.isDesktopSubject.asObservable();
  isTablet$ = this.isTabletSubject.asObservable();
  isMobile$ = this.isMobileSubject.asObservable();

  constructor() {}

  setIsDesktop(value: boolean) {
    this.isDesktopSubject.next(value);
  }

  setIsTablet(value: boolean) {
    this.isTabletSubject.next(value);
  }

  setIsMobile(value: boolean) {
    this.isMobileSubject.next(value);
  }
}
