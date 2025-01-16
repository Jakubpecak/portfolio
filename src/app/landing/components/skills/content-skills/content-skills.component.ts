import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Skill } from '../../../../core/models/skill';

@Component({
  selector: 'app-content-skills',
  templateUrl: './content-skills.component.html',
  styleUrl: './content-skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentSkillsComponent {
  @Input() skillList: Skill[] = [];
  @Input() selected: number = 0;
}
