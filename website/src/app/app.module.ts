import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebPageComponent } from './web-page/web-page.component';
import { NavComponent } from './web-page/nav/nav.component';
import { CarouselComponent } from './web-page/carousel/carousel.component';
import { CardComponent } from './web-page/card/card.component';
import { FooterComponent } from './web-page/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    WebPageComponent,
    NavComponent,
    CarouselComponent,
    CardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
  ],
  providers: [],
  exports:[CarouselComponent],
  bootstrap: [AppComponent,CarouselComponent]
})
export class AppModule { }
