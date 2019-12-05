import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Housing-SPA';
  yourname="John";

  onInputChange(event: Event)
  {
    this.yourname=(<HTMLInputElement>event.target).value;
  }
}
