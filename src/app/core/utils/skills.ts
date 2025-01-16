import { Skill } from '../models/skill';
import { SkillMenuItem } from '../models/skill-menu-item';

export const skills: Skill[] = [
  {
    value: 0,
    label: 'Angular',
    description: 'skills.list.item-1',
    percent: 80,
  },
  {
    value: 1,
    label: 'JavaScript/TypeScript',
    description: 'skills.list.item-2',
    percent: 80,
  },
  {
    value: 2,
    label: 'HTML5',
    description: 'skills.list.item-3',
    percent: 85,
  },
  {
    value: 3,
    label: 'CSS/SCSS',
    description: 'skills.list.item-4',
    percent: 85,
  },
  {
    value: 4,
    label: 'Git',
    description: 'skills.list.item-5',
    percent: 60,
  },
  {
    value: 5,
    label: 'Responsive Web Design',
    description: 'skills.list.item-6',
    percent: 85,
  },
  {
    value: 6,
    label: 'Figma/Adobe XD',
    description: 'skills.list.item-7',
    percent: 40,
  },
];

export const menuSkills: SkillMenuItem[] = [
  {
    value: 1,
    name: 'fa-brands fa-js',
    label: 'Javascript/typescript',
  },
  {
    value: 2,
    name: 'fa-brands fa-html5',
    label: 'HTML5',
  },
  {
    value: 3,
    name: 'fa-brands fa-css3-alt',
    label: 'CSS/SCSS',
  },
  {
    value: 4,
    name: 'fa-brands fa-git',
    label: 'Git',
  },
  {
    value: 5,
    name: 'fa-solid fa-mobile-screen',
    label: 'Responsive',
  },
  {
    value: 6,
    name: 'fa-brands fa-figma',
    label: 'Figma/Adobe XD',
  },
];
