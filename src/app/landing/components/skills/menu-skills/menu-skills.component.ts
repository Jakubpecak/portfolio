import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { SkillMenuItem } from '../../../../core/models/skill-menu-item';

@Component({
  selector: 'app-menu-skills',
  templateUrl: './menu-skills.component.html',
  styleUrl: './menu-skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuSkillsComponent {
  @Input() selected: number = 0;
  @Input() menuItems: SkillMenuItem[] = [];
  @Input() isMobile: boolean = false;
  @Output() selectChanged = new EventEmitter<number>();

  selectValue(value?: number) {
    if (!!value) {
      this.selected = value;
      this.selectChanged.emit(this.selected);
    }
  }
}
