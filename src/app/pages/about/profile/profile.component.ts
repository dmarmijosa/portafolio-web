import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [],
})
export class ProfileComponent {
  year: Date = new Date();
  nacimiento = this.year.getFullYear() - 1992;
  constructor(private translate: TranslateService) {
    const currentLang = this.translate.currentLang;
    console.log('El idioma actual es:', translate);
  }

  
}
