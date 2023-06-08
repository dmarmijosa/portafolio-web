import { Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: [],
})
export class SettingsComponent {
  currentLanguage: string = 'es';
  constructor(
    private translateService: TranslateService,
    private dataService: DataService
  ) {}
  changeLanguage() {
    if (this.currentLanguage === 'es') {
      this.translateService.use('en');
      this.currentLanguage = 'en';
      this.dataService.setData(this.currentLanguage);
    } else {
      this.translateService.use('es');
      this.currentLanguage = 'es';
      this.dataService.setData(this.currentLanguage);
    }
  }


  descargar() {
    if (this.currentLanguage === 'en') {
      window.open('./assets/pdfs/cv/cv-en.pdf', '_blank');
    } else {
      window.open('./assets/pdfs/cv/cv-es.pdf', '_blank');
    }
  }
}
