import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AboutMeComponent } from './landing/components/about-me/about-me.component';
import { ContactComponent } from './landing/components/contact/contact.component';
import { PortfolioComponent } from './landing/components/portfolio/portfolio.component';
import { ProfileComponent } from './landing/components/profile/profile.component';
import { QualificationsComponent } from './landing/components/qualifications/qualifications.component';
import { ServicesComponent } from './landing/components/services/services.component';
import { ContentSkillsComponent } from './landing/components/skills/content-skills/content-skills.component';
import { MenuSkillsComponent } from './landing/components/skills/menu-skills/menu-skills.component';
import { SkillsComponent } from './landing/components/skills/skills.component';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from './shared/shared.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfileComponent,
    AboutMeComponent,
    SkillsComponent,
    QualificationsComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    MenuSkillsComponent,
    ContentSkillsComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
  ],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
