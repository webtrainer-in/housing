import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  
  Properties: Array<any>;
  
  constructor(private http:HttpClient) { }
  
  ngOnInit() {
    this.http.get('data/properties.json')
    .pipe(
      map(responseData => {
        //console.log(responseData);
        const PropertiesArray = [];
        for (const id in responseData) {
            PropertiesArray.push(responseData[id]);
        }
        //console.log(PropertiesArray);
        return PropertiesArray; 
      })
    )
    .subscribe(data=>this.Properties=data);
  }
  }


