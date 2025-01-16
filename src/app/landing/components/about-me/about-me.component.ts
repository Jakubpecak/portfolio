import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CountOption } from '../../../core/models/count-option';
import { LanguageService } from '../../../core/services/language.service';
import { countOptions } from '../../../core/utils/count-options';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent implements OnInit, OnDestroy {
  currentLanguage: string = 'en';
  countUpOptions = {
    prefix: '+',
    enableScrollSpy: true,
    scrollSpyDelay: 200,
  };
  countOptions: CountOption[] = countOptions;
  subscriptions = new Subscription();
  @Input() isDesktop!: boolean;
  @Input() isTablet!: boolean;
  @Input() isMobile!: boolean;

  constructor(
    private languageService: LanguageService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.languageService.language$.subscribe((language) => {
        this.currentLanguage = language;
        this.cdr.markForCheck();
      })
    );
  }

  downloadCV() {
    const filePath =
      this.currentLanguage === 'en'
        ? '/assets/files/Jakub Pęcak CV ENG.pdf'
        : '/assets/files/Jakub Pęcak CV.pdf';

    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop()!;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
