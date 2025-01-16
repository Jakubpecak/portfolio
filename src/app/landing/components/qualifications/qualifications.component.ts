import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Qualification } from '../../../core/models/qualification';
import { qualifications } from '../../../core/utils/qualifications';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrl: './qualifications.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QualificationsComponent {
  qualifications: Qualification[] = qualifications;
  @Input() isDesktop!: boolean;
  @Input() isTablet!: boolean;
  @Input() isMobile!: boolean;
}
