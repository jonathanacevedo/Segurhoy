import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContentcardComponent } from './contentcard/contentcard.component';
import { CompanyComponent } from './company/company.component';
import { WorkComponent } from './work/work.component';
import { InfoComponent } from './info/info.component';
import { ContactoComponent } from './contacto/contacto.component';

import { AgmCoreModule } from '@agm/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    ContentcardComponent,
    CompanyComponent,
    WorkComponent,
    InfoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollToModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'API-KEY'
    }),
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
