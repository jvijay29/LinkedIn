import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vijayprosam';
  constructor() {
    document.body.style.backgroundColor = '#283e4a';
  }
  apple(a: string, b: string) {
    if (a.indexOf('@') !== -1 && a.indexOf('.com') !== -1 && b.length > 5) {
      alert ('Welcome');
    } else if (a.length === 0 || b.length === 0) {
      alert ('Enter all the fields');
    } else {
      alert ('Invalid');
    }
  }
}

