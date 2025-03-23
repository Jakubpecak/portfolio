import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './core/services/language.service';
import { CUSTOM_BREAKPOINTS } from './core/utils/customBreakPoints';

import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { MenuItem } from './core/models/menu-item';
import { ResponsiveService } from './core/services/responsive.service';
import { languages } from './core/utils/languages';
import { menu } from './core/utils/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  isDesktop: boolean = false;
  isTablet: boolean = false;
  isMobile: boolean = false;
  isLoading: boolean = true;
  isAtBottom: boolean = false;
  menuList: MenuItem[] = menu;
  languageList = languages;
  currentLanguage!: string;
  private observer!: IntersectionObserver;
  subscriptions = new Subscription();
  @ViewChild('bottomMarker', { static: true, read: ElementRef })
  bottomMarker!: ElementRef;

  constructor(
    private translate: TranslateService,
    private breakpointObserver: BreakpointObserver,
    private responsiveService: ResponsiveService,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.responsiveObserver();
    this.getCurrentLanguage();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if ('IntersectionObserver' in window) {
        this.initializeObserver();
      }
      setTimeout(() => {
        this.isLoading = false;
        this.cdr.detectChanges();
      }, 1000);
    }
  }

  getCurrentLanguage() {
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.translate.use(this.currentLanguage);
  }

  changeLanguage(language: string) {
    this.translate.use(language);
    this.languageService.setLanguage(language);
  }

  responsiveObserver() {
    const breakpoints = CUSTOM_BREAKPOINTS;
    this.subscriptions.add(
      this.breakpointObserver
        .observe([breakpoints.MOBILE, breakpoints.TABLET, breakpoints.DESKTOP])
        .subscribe((state: BreakpointState) => {
          this.isDesktop = state.breakpoints[breakpoints.DESKTOP];
          this.responsiveService.setIsDesktop(this.isDesktop);
          this.isTablet = state.breakpoints[breakpoints.TABLET];
          this.responsiveService.setIsTablet(this.isTablet);
          this.isMobile = state.breakpoints[breakpoints.MOBILE];
          this.responsiveService.setIsMobile(this.isMobile);
        })
    );
  }

  initializeObserver() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.isAtBottom = entry.isIntersecting;
        this.cdr.markForCheck();
      },
      {
        root: null,
        threshold: 0,
      }
    );
    if (this.bottomMarker?.nativeElement) {
      this.observer.observe(this.bottomMarker.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    if (this.observer && this.bottomMarker?.nativeElement) {
      this.observer.unobserve(this.bottomMarker.nativeElement);
      this.observer.disconnect();
    }
  }
}
