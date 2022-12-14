import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataTableComponent } from './data-table/data-table.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './dashboard/carousel/carousel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoticeComponent } from './notice/notice.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DataTableComponent,
    CarouselComponent,
    NoticeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
