import { Component, Input } from '@angular/core';
import { Social } from '../../../core/models/social-item';
import { socials } from '../../../core/utils/socials';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear = new Date();
  socials: Social[] = socials;
  @Input() isDesktop!: boolean;
  @Input() isTablet!: boolean;
  @Input() isMobile!: boolean;
}
