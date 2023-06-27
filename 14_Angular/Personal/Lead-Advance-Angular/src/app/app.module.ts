import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { AbstractComponent } from './components/abstract/abstract.component';
import { ButtonComponent } from './components/button/button.component';
import { SecPageComponent } from './components/sec-page/sec-page.component';
import { FormPageComponent } from './components/form-page/form-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { FooterTitleComponent } from './components/footer-title/footer-title.component';
@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    AbstractComponent,
    ButtonComponent,
    SecPageComponent,
    FormPageComponent,
    HomePageComponent,
    FooterTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
