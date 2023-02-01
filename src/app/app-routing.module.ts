import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BookingComponent } from './booking/booking.component';
const routes: Routes = [
  {path:'',redirectTo:'signin',pathMatch:'full'},
  {path:"signup",component:SignupComponent},
  {path:"home",component:HomeComponent},
  {path:"signin",component:SigninComponent},
  {path:"hotel",component:HotelComponent},
  {path:"hoteldetails/:_id",component:HotelDetailsComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"footer",component:FooterComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"booking",component:BookingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
