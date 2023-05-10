import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MinibarComponent } from './components/minibar/minibar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/about/profile/profile.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/about/skills/skills.component';
import { ResumeComponent } from './pages/about/resume/resume.component';
import { ServicesProfesionalComponent } from './pages/services-profesional/services-profesional.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    MinibarComponent,
    HomeComponent,
    ProfileComponent,
    AboutComponent,
    SkillsComponent,
    ResumeComponent,
    ServicesProfesionalComponent,
    TestimonialsComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory:(http:HttpClient)=>{
          return new TranslateHttpLoader(http, './assets/i18n/', '.json');
        },
        deps:[HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
