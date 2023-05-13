import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: [],
})
export class SkillsComponent implements OnInit {
  datos1: string[] = [];
  datos2: string[] = [];
  constructor(private skillService: SkillService) {}
  ngOnInit() {
    this.skillService.getSkills().subscribe((resp: any) => {
      resp.conocimientos.conocimientos.forEach((item:any, index:any) => {
        if (index % 2 === 0) {
          this.datos1.push(item);
        } else {
          this.datos2.push(item);
        }
      });
    });


  }
}
