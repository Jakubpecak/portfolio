import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CountUpModule } from 'ngx-countup';
import { LightboxModule } from 'ngx-lightbox';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CursorTailComponent } from './components/cursor-tail/cursor-tail.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/form/error/error.component';
import { InputComponent } from './components/form/input/input.component';
import { TextareaComponent } from './components/form/textarea/textarea.component';
import { ModalComponent } from './components/modal/modal.component';
import { BottomNavigationComponent } from './components/navigation/bottom-navigation/bottom-navigation.component';
import { MobileNavListComponent } from './components/navigation/bottom-navigation/mobile-nav-list/mobile-nav-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    PageNotFoundComponent,
    InputComponent,
    TextareaComponent,
    ErrorComponent,
    ProgressBarComponent,
    ModalComponent,
    CursorTailComponent,
    SpinnerComponent,
    BottomNavigationComponent,
    MobileNavListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTabsModule,
    LightboxModule,
    MatInputModule,
    MatProgressBarModule,
    MatDialogModule,
    MatStepperModule,
    CarouselModule,
    CountUpModule,
    MatMenuModule,
    LayoutModule,
    MatBottomSheetModule,
    MatListModule,
    MatSnackBarModule,
    NgOptimizedImage,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    NavigationComponent,
    FooterComponent,
    PageNotFoundComponent,
    MatTabsModule,
    LightboxModule,
    InputComponent,
    TextareaComponent,
    ErrorComponent,
    MatInputModule,
    MatProgressBarModule,
    ProgressBarComponent,
    ModalComponent,
    MatStepperModule,
    CarouselModule,
    CountUpModule,
    MatMenuModule,
    CursorTailComponent,
    LayoutModule,
    SpinnerComponent,
    BottomNavigationComponent,
    MatBottomSheetModule,
    MatListModule,
    MatSnackBarModule,
    NgOptimizedImage,
  ],
})
export class SharedModule {}
