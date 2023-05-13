import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http:HttpClient) { }
  getSkills(){
    return this.http.get('./assets/db/skills.json');
  }
}
