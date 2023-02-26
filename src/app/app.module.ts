import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataTableComponent } from './data-table/data-table.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesComponent } from './page/courses/courses.component';
import { ExaminationComponent } from './page/examination/examination.component';
import { PlacementComponent } from './page/placement/placement.component';
import { ResearchComponent } from './page/research/research.component';
import { StudentscornerComponent } from './page/studentscorner/studentscorner.component';
import { TestimonialsComponent } from './dashboard/home/testimonials/testimonials.component';
import { AboutchetanaComponent } from './dashboard/home/aboutchetana/aboutchetana.component';
import { AcademicsComponent } from './dashboard/home/academics/academics.component';
import { CampusComponent } from './dashboard/home/campus/campus.component';
import { CarouselComponent } from './dashboard/home/carousel/carousel.component';
import { NoticeComponent } from './notice/notice.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DataTableComponent,
    CoursesComponent,
    ExaminationComponent,
    PlacementComponent,
    ResearchComponent,
    StudentscornerComponent,
    TestimonialsComponent,
    AboutchetanaComponent,
    AcademicsComponent,
    CampusComponent,
    NoticeComponent,
    CarouselComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
