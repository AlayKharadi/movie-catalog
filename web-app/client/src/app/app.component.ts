import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie-Catalog';
  public results!: any[];


  getResults($event: any) {
    this.results = [...$event];
  }
}
