import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  title = 'Housing-SPA';
  yourname = 'John';
  constructor() { }

  ngOnInit() {
  }


  onInputChange(event: Event) {
    this.yourname = (event.target as HTMLInputElement).value;
  }

}
