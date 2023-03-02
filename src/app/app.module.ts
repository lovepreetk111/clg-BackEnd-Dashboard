import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BreadcrumbModule} from 'angular-crumbs';
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
import { FyjcComponent } from './page/courses/Junior college/fyjc/fyjc.component';
import { SyjcComponent } from './page/courses/Junior college/syjc/syjc.component';
import { BaComponent } from './page/courses/Degree college/ba/ba.component';
import { BcomComponent } from './page/courses/Degree college/bcom/bcom.component';
import { BscitComponent } from './page/courses/Self Finance course/bscit/bscit.component';
import { BmsComponent } from './page/courses/Self Finance course/bms/bms.component';
import { BafComponent } from './page/courses/Self Finance course/baf/baf.component';
import { BmmcComponent } from './page/courses/Self Finance course/bmmc/bmmc.component';
import { PhdCommComponent } from './page/courses/Doctoral programme/phd-comm/phd-comm.component';
import { McomComponent } from './page/courses/Post Graduation/mcom/mcom.component';
import { YcmouComponent } from './page/courses/Distance learning/ycmou/ycmou.component';


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
    FyjcComponent,
    SyjcComponent,
    BaComponent,
    BcomComponent,
    BscitComponent,
    BmsComponent,
    BafComponent,
    BmmcComponent,
    PhdCommComponent,
    McomComponent,
    YcmouComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BreadcrumbModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
