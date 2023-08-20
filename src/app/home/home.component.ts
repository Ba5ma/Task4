import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedUser :any = 'default';
  selectedValue:any;
  constructor(private router: Router){}

/*   goToQus() {
    this.router.navigate(['/ques'], { queryParams: { user: this.selectedUser.name } });

    } */

    goToQus() {
    if (this.selectedUser) {
      this.router.navigate(['/ques'], { queryParams: { user: this.selectedUser.name } });
    }
  }
  

  user_names = [
    {"id":1, "name":"Basma"},
    {"id":2, "name":"Saba"},
    {"id":3, "name":"Yara"},
    {"id":4, "name":"Amani" }
];




}

