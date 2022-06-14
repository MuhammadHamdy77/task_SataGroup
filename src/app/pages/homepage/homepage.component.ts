import { Component, OnInit } from '@angular/core';
import { SatafoodService } from 'src/app/services/satafood.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  categories:any[] = [];
  sliders:any[] = [];
  newoffers:any[] = [];

  constructor(private _SatafoodService:SatafoodService) {
    this._SatafoodService.getData().subscribe( (data) => {
      this.categories = data.categories;
      this.sliders = data.sliders;
      this.newoffers = data.newoffers;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('complete');
      }
    );

   }

  ngOnInit() {
    
  }

  itemsPerSlide = 5;
  singleSlideOffset = true;
  noWrap = true;
 
  slides = [
    {image: 'assets/images/hotels/1.png'},
    {image: 'assets/images/hotels/2.png'},
    {image: 'assets/images/hotels/3.png'},
    {image: 'assets/images/hotels/4.png'},
    {image: 'assets/images/hotels/5.png'}

  ];
  

}
