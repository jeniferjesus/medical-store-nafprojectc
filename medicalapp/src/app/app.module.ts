import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { HotToastModule } from '@ngneat/hot-toast';
import {AngularFireModule} from '@angular/fire/compat';
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatCardModule } from '@angular/material/card';
import { LoginregisterComponent } from './component/loginregister/loginregister.component';
import{NavbarComponent} from './component/navbar/navbar.component';
import{CarouselComponent} from './component/carousel/carousel.component';
import{DetailsComponent} from './component/details/details.component';
import{FooterComponent} from './component/footer/footer.component';
import{AcidpageComponent} from './component/acidpage/acidpage.component'
import { BpComponent } from './component/bp/bp.component';
import { CommonmedComponent } from './component/commonmed/commonmed.component';
import { CategoryComponent } from './component/category/category.component';
import { DiabetespageComponent } from './component/diabetespage/diabetespage.component';
import { FeverComponent } from './component/fever/fever.component';
import { NavcategoryComponent } from './component/navcategory/navcategory.component';
import { StockComponent } from './component/stock/stock.component';
import { ThroatComponent } from './component/throat/throat.component';
import { VitaminComponent } from './component/vitamin/vitamin.component';
// import { FeverComponent } from './component/navbarmed/fever/fever.component';
import{NavbarmedComponent} from './component/navbarmed/navbarmed.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
//import{NavbarComponent} from './component/homepagedesign/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
 import { MatMenuModule } from '@angular/material/menu';
 import { MatIconModule } from '@angular/material/icon';
 import { MatDividerModule } from '@angular/material/divider';
 import { MatListModule } from '@angular/material/list';
import { DashboarddesignComponent } from './component/dashboarddesign/dashboarddesign.component';
import { AdminhomecontentComponent } from './component/adminhomecontent/adminhomecontent.component';
import { AdminsidenavigationComponent } from './component/adminsidenavigation/adminsidenavigation.component';
import { NewregComponent } from './component/newreg/newreg.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { AnalysisComponent } from './component/analysis/analysis.component';
import { DisplayusermedicineComponent } from './component/displayusermedicine/displayusermedicine.component';
// import { MatTableDataSource } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DisplaystockdetailComponent } from './component/displaystockdetail/displaystockdetail.component';
import { DisplayResigerdetailComponent } from './component/display-resigerdetail/display-resigerdetail.component';
import { CardsComponent } from './component/cards/cards.component';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { HerocompComponent } from './component/herocomp/herocomp.component';
import { AboutmsmComponent } from './component/aboutmsm/aboutmsm.component';
import { StatscompComponent } from './component/statscomp/statscomp.component';
import { ServicecategoryComponent } from './component/servicecategory/servicecategory.component';
import { CalltoactionComponent } from './component/calltoaction/calltoaction.component';
import { EndcompComponent } from './component/endcomp/endcomp.component';
import { CategoriespageComponent } from './component/categoriespage/categoriespage.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginregisterComponent,
    NavbarComponent,
    CarouselComponent,
    DetailsComponent,
    FooterComponent,
    AcidpageComponent,
    BpComponent,
    CommonmedComponent,
    CategoryComponent,
    DiabetespageComponent,
    FeverComponent,
    NavcategoryComponent,
    StockComponent,
    ThroatComponent,
    VitaminComponent,
    NavbarmedComponent,
    SidenavComponent,
    DashboarddesignComponent,
    AdminhomecontentComponent,
    AdminsidenavigationComponent,
    NewregComponent,
    AnalysisComponent,
    DisplayusermedicineComponent,
    DisplaystockdetailComponent,
    DisplayResigerdetailComponent,
    CardsComponent,
    HerocompComponent,
    AboutmsmComponent,
    StatscompComponent,
    ServicecategoryComponent,
    CalltoactionComponent,
    EndcompComponent,
    CategoriespageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,  
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    DropDownListModule,
    Ng2SearchPipeModule,
    // MatTableDataSource,
    MatPaginatorModule,
   // AngularFirestore,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot(),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
     MatMenuModule,
     MatIconModule,
     MatDividerModule,
     MatListModule 
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
