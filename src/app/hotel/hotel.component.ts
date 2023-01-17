import { Component,OnInit } from '@angular/core';
import { HotelService } from '../service/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  public productlist:any;


  constructor(private api:HotelService){}

  ngOnInit():void{
    this.api.gethotel().subscribe(res=>{
      // console.log(res);
      this.productlist = res;

    })

  }
















}
