import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: [
  ]
})
export class SettingsComponent {
  currentLanguage: string = 'es';
  constructor(private translateService:TranslateService){

  }
  changeLanguage(){
    if (this.currentLanguage === 'es') {
      this.translateService.use('en');
      this.currentLanguage = 'en';
    } else {
      this.translateService.use('es');
      this.currentLanguage = 'es';
    }
  }
}
