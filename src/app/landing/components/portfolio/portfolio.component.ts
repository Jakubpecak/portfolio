import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Content } from '../../../core/models/content';
import { ProjectItem } from '../../../core/models/project-item';
import { contentList, websiteList } from '../../../core/utils/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void => *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class PortfolioComponent {
  websiteList: ProjectItem[] = websiteList;
  contentList: Content[] = contentList;
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    dotsData: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
    nav: true,
  };

  openDemoPage() {
    window.open('https://www.google.pl', '_blank', 'noopener,noreferrer');
  }
}
