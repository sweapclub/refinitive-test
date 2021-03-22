import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'refinitive-q2';
  objCategory: Array<string> = [];
  filterText: string = "";
  constructor(private http: HttpClient) {
    this.http.get('https://api.publicapis.org/categories').subscribe((data: Array<string>) => {
      this.objCategory = data;
    })
  }

  filterItem(e) {
    this.filterText = e.target.value;
  }
}
