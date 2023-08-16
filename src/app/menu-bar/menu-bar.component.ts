import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  constructor(private router: Router, private userService: StudentsService ) {}

  category: any;
  currency: any;
  language: any;
  ngOnInit() {
    this.getCategory();
    this.getCurrency();
    this.getLanguage();
  }

  async getLanguage() {
    await this.userService.getLanguage().subscribe(data => {
      const value: any = data;
      this.language = value.data;
      console.log(this.language, 'laaaaaaaaa')
    });
  }

  async getCategory() {
    await this.userService.getCategory().subscribe(data => {
      const value: any = data;
      this.category = value.data;
    });
  }

  async getCurrency() {
    await this.userService.getCurrency().subscribe(data => {
      const value: any = data;
      this.currency = value.data;
    });
  }
}
