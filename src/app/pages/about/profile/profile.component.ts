import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [],
})
export class ProfileComponent {
  year: Date = new Date();
  nacimiento = this.year.getFullYear() - 1992;
}
