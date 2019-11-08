import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";

import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { TravelPageComponent } from './travel-page/travel-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import {TravelsService} from './shared/travels.service';
import { TravelsComponent } from './travels/travels.component';
import { TravelsListComponent } from './travels-list/travels-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    BlogPageComponent,
    TravelPageComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    TravelsComponent,
    TravelsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [TravelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
