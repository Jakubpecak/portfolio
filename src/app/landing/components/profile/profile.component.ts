import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  NgZone,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import Typed from 'typed.js';
import { Social } from '../../../core/models/social-item';
import { socials } from '../../../core/utils/socials';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit, AfterViewInit {
  images: string[] = ['assets/imgs/my_picture.webp'];
  lightboxImages: any[] = [];
  socials: Social[] = socials;
  @Input() isDesktop!: boolean;
  @Input() isTablet!: boolean;
  @Input() isMobile!: boolean;
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;

  constructor(
    private lightbox: Lightbox,
    @Inject(PLATFORM_ID) private platformId: any,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.imageInit();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initTypeWriter();
    }
  }

  imageInit() {
    this.images.forEach((image: string) => {
      const lbImage = {
        src: image,
        thumb: image,
      };
      this.lightboxImages.push(lbImage);
    });
  }

  initTypeWriter() {
    this.ngZone.runOutsideAngular(() => {
      const options = {
        strings: ['Angular developer', 'Frontend developer', 'Web developer'],
        autoStart: true,
        typeSpeed: 80,
        backSpeed: 80,
        loop: true,
      };
      new Typed(this.typedElement.nativeElement, options);
    });
  }

  openImage(index: number): void {
    this.lightbox.open(this.lightboxImages, index);
  }
}
