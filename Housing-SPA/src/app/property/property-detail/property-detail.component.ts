import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/Services/housing.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  private property: any;
  private propertyid:number
  private properties: Property[];

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private route: ActivatedRoute, 
              private housingServices:HousingService
    ) { }

  ngOnInit() {

    this.galleryOptions = [
      {
          width: '680px',
          height: '500px',
          thumbnailsColumns: 4,
          imagePercent: 100,
          imageAnimation: NgxGalleryAnimation.Slide,
          preview: false
      }
    ];
    this.galleryImages = [
      {
          small: 'assets/images/internal-1.jpg',
          medium: 'assets/images/internal-1.jpg',
          big: 'assets/images/internal-1.jpg'
      },
      {
        small: 'assets/images/internal-2.jpg',
        medium: 'assets/images/internal-2.jpg',
        big: 'assets/images/internal-2.jpg'
      },
      {
        small: 'assets/images/internal-3.jpg',
        medium: 'assets/images/internal-3.jpg',
        big: 'assets/images/internal-3.jpg'
      },
      {
        small: 'assets/images/internal-4.jpg',
        medium: 'assets/images/internal-4.jpg',
        big: 'assets/images/internal-4.jpg'
      },
      {
        small: 'assets/images/internal-5.jpg',
        medium: 'assets/images/internal-5.jpg',
        big: 'assets/images/internal-5.jpg'
      },


    ];  

    this.route.data.subscribe(
      (data: Property) => {
        this.property=data['prp'];
        console.log(this.property);
      });
        

    // this.propertyid=this.route.snapshot.params['id'];

    // this.housingServices.getAllProperties()
    // .subscribe(
    //   data => {
    //     this.properties=data;
    //     this.property=this.housingServices.getProperty(+this.propertyid,this.properties);
    //     console.log(this.properties);
    //     console.log(this.property );
    //   },
    //   error => console.log(error.statusText)
    //   );
  }

}
