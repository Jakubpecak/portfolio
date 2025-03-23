import {
  ChangeDetectionStrategy,
  Component,
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
  currentLanguage!: string;
  countUpOptions = {
    prefix: '+',
    enableScrollSpy: true,
    scrollSpyDelay: 200,
  };
  countOptions: CountOption[] = countOptions;
  subscriptions = new Subscription();

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.languageService.language$.subscribe(() => {
        this.currentLanguage = this.languageService.getCurrentLanguage();
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
