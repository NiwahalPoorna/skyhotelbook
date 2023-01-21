import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { hotel } from '../data-type';
import { HotelService } from '../service/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  // public productlist:any;

  hotelList: undefined | hotel[];
  // productMessage: undefined | string;

  constructor(private api:HotelService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.api.hotelList().subscribe((res)=>{
      console.warn(res);
      if(res){
        this.hotelList=res;

      }
    });
  }
















}
