import { Qualification } from '../models/qualification';

export const qualifications: Qualification[] = [
  {
    type: 'work',
    label: 'qualification.work',
    icon: 'fas fa-briefcase',
    items: [
      {
        title: 'Innovation Lab.',
        subtitle: 'Angular developer',
        time: 'qualification.work-currently',
      },
      {
        title: 'Medvocation',
        subtitle: 'Angular developer',
        time: '04/2023 - 08/2023',
      },
      {
        title: 'PerfectClue',
        subtitle: 'Angular developer',
        time: '08/2022 – 03/2023',
      },
      {
        title: 'qualification.agency',
        subtitle: 'Webmaster',
        time: '08/2021 – 07/2022',
      },
    ],
  },
  {
    type: 'education',
    label: 'qualification.education',
    icon: 'fas fa-graduation-cap',
    items: [
      {
        title: 'qualification.university',
        subtitle: 'qualification.profession',
        time: '10/2014 – 02/2018',
      },
      {
        title: 'qualification.school',
        subtitle: 'qualification.student',
        time: '08/2011 – 06/2014',
      },
    ],
  },
];
