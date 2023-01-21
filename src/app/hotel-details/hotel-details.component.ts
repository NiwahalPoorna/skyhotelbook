import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { hotel } from '../data-type';
import { HotelService } from '../service/hotel.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent {

  hotelData:undefined|hotel;

  constructor(private route:ActivatedRoute , private hotel:HotelService){ }


  ngOnInit(): void {
    let productId=this.route.snapshot.paramMap.get('id');
    console.warn(productId); 
    productId && this.hotel.getvila(productId).subscribe((res)=>{
      console.warn(res);
      this.hotelData=res;
    })
  }


}
