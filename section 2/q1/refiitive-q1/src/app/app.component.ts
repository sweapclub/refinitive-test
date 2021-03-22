import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'refiitive-q1';

  func:string ="prime";
  inputNumber: Number = 0;

  blockSymbol(e) {
    var invalidChars = ["-", "+", "e"]; //include "." if you only want integers
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  }
}
