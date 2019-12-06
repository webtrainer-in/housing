import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  
  title = 'Housing-SPA';
  yourname="John";
  onInputChange(event: Event)
  {
    this.yourname=(<HTMLInputElement>event.target).value;
  }

}
