import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcidpageComponent } from './component/acidpage/acidpage.component';
import { AdminhomecontentComponent } from './component/adminhomecontent/adminhomecontent.component';
import { AdminsidenavigationComponent } from './component/adminsidenavigation/adminsidenavigation.component';
import { AnalysisComponent } from './component/analysis/analysis.component';
import { BpComponent } from './component/bp/bp.component';
import { CardsComponent } from './component/cards/cards.component';
import { CarouselComponent } from './component/carousel/carousel.component';

import { HerocompComponent } from './component/herocomp/herocomp.component';
import { AboutmsmComponent } from './component/aboutmsm/aboutmsm.component';
import { StatscompComponent } from './component/statscomp/statscomp.component';
import { ServicecategoryComponent } from './component/servicecategory/servicecategory.component';
import { CalltoactionComponent } from './component/calltoaction/calltoaction.component';
import { EndcompComponent } from './component/endcomp/endcomp.component';

import { CategoryComponent } from './component/category/category.component';
import { CommonmedComponent } from './component/commonmed/commonmed.component';
import { DetailsComponent } from './component/details/details.component';
import { DiabetespageComponent } from './component/diabetespage/diabetespage.component';
import { DisplayResigerdetailComponent } from './component/display-resigerdetail/display-resigerdetail.component';
import { DisplaystockdetailComponent } from './component/displaystockdetail/displaystockdetail.component';
import { DisplayusermedicineComponent } from './component/displayusermedicine/displayusermedicine.component';
import { FeverComponent } from './component/fever/fever.component';
import { FooterComponent } from './component/footer/footer.component';

import { LoginComponent } from './component/login/login.component';
import { LoginregisterComponent } from './component/loginregister/loginregister.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NavbarmedComponent } from './component/navbarmed/navbarmed.component';
import { NavcategoryComponent } from './component/navcategory/navcategory.component';
import { NewregComponent } from './component/newreg/newreg.component';
import { RegisterComponent } from './component/register/register.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { StockComponent } from './component/stock/stock.component';
import { ThroatComponent } from './component/throat/throat.component';
import { VitaminComponent } from './component/vitamin/vitamin.component';

const routes: Routes = [
  {path: '', redirectTo:'navbar', pathMatch:'full'},
  {path: 'navbar',component:NavbarComponent},
  {path: 'carousel',component:CarouselComponent},
  {path: 'herocomp',component:HerocompComponent},
  {path: 'aboutmsm',component:AboutmsmComponent},
  {path: 'statscomp',component:StatscompComponent},
  
  {path: 'calltoaction',component:CalltoactionComponent},
  {path: 'endcomp',component:EndcompComponent},
  {path: 'detail',component:DetailsComponent},
  {path: 'footer',component:FooterComponent},
  {path: 'login',component:LoginComponent},
  {path: 'loginregister',component:LoginregisterComponent},

  // {path: 'acidpage',component:AcidpageComponent},
  // {path: 'bp',component:BpComponent},
  {path: 'category',component:CommonmedComponent},
  {path: 'commonmed',component:CategoryComponent},
  // {path: 'diabetespage',component:DiabetespageComponent},
  // {path: 'fever',component:FeverComponent},

  {path: 'navcategory',component:NavcategoryComponent},
  {path: 'stock',component:StockComponent},
  // {path: 'throat',component:ThroatComponent},
  // {path: 'vitamin',component:VitaminComponent},
  {path: 'navbarmed',component:NavbarmedComponent},
  {path: 'sidenav',component:SidenavComponent},
  {path: 'newreg',component:NewregComponent},
  {path: 'adminhomecontent',component:AdminhomecontentComponent},
  {path: 'adminsidenavigation',component:AdminsidenavigationComponent},
  {path: 'analysis',component:AnalysisComponent},
  {path: 'displayusermedicine',component:DisplayusermedicineComponent},
  {path: 'display-registerdetail',component:DisplayResigerdetailComponent},
  {path: 'displaystockdetail',component:DisplaystockdetailComponent},
  {path: 'card',component:CardsComponent},
  // {path: 'servicecategory',component:ServicecategoryComponent},
  {path: '',component:ServicecategoryComponent},
  // {path: 'acidpage',component:AcidpageComponent},
  {path: 'acidpage/:productId',component:AcidpageComponent},
  {path: 'bp/:bpproductId',component:BpComponent},
  {path: 'diabetespage/:diabetsproductId',component:DiabetespageComponent},
  {path: 'fever/:feverproductId',component:FeverComponent},
  {path: 'throat/:throatproductId',component:ThroatComponent},
  {path: 'vitamin/:vitaminproductId',component:VitaminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
