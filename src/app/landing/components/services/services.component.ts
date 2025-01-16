import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceDetail } from '../../../core/models/service-detail';
import {
  brandList,
  designList,
  frontendList,
  serviceDialogDetails,
} from '../../../core/utils/services';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  frontendList: string[] = frontendList;
  designList: string[] = designList;
  brandList: string[] = brandList;
  serviceDialogDetails: ServiceDetail[] = serviceDialogDetails;
  @Input() isDesktop!: boolean;
  @Input() isTablet!: boolean;
  @Input() isMobile!: boolean;

  constructor(public dialog: MatDialog) {}

  openDialog(title: string, list: string[]): void {
    this.dialog.open(ModalComponent, {
      disableClose: false,
      data: { title, list },
    });
  }
}
