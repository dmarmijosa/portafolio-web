import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [],
})
export class ProfileComponent {
  data: any;
  year: Date = new Date();
  nacimiento = this.year.getFullYear() - 1992;
  constructor(private dataService: DataService) {
    this.dataService.data$.subscribe(data => {
      this.data = data;

    });


  }
  descargar(){
    if(this.data==='en'){
      window.open('./assets/pdfs/cv/cv-en.pdf', '_blank');
    }else{
      window.open('./assets/pdfs/cv/cv-es.pdf', '_blank');
      
    }
  }

  
}
