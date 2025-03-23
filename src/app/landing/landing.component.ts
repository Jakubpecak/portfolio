import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ResponsiveService } from '../core/services/responsive.service';
import { colorPalette } from '../core/utils/color-palette';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent implements OnInit, OnDestroy {
  colorPalette = colorPalette;
  isDesktop: boolean = false;
  isTablet: boolean = false;
  isMobile: boolean = false;
  subscriptions = new Subscription();

  constructor(
    private responsiveService: ResponsiveService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.responsiveObserver();
    this.applyColorFromLocalStorage();
  }

  applyColorFromLocalStorage() {
    if (isPlatformBrowser(this.platformId)) {
      const color = localStorage.getItem('color');
      if (color) {
        document.documentElement.style.setProperty('--secondary-color', color);
      }
    }
  }

  changeTheme(color: string) {
    localStorage.setItem('color', color);
    document.documentElement.style.setProperty('--secondary-color', color);
  }

  responsiveObserver() {
    this.subscriptions.add(
      this.responsiveService.isDesktop$.subscribe(
        (value) => (this.isDesktop = value)
      )
    );
    this.subscriptions.add(
      this.responsiveService.isTablet$.subscribe(
        (value) => (this.isTablet = value)
      )
    );
    this.subscriptions.add(
      this.responsiveService.isMobile$.subscribe(
        (value) => (this.isMobile = value)
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
