import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginValue: any
  constructor(
  ) {
  }
  ngOnInit() {
    console.log(this.loginValue);
  }
}
