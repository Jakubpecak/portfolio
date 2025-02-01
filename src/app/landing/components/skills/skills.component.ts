import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Skill } from '../../../core/models/skill';
import { SkillMenuItem } from '../../../core/models/skill-menu-item';
import { menuSkills, skills } from '../../../core/utils/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  selected: number = 0;
  skillList: Skill[] = skills;
  menuItems: SkillMenuItem[] = menuSkills;
  @Input() isMobile!: boolean;
}
