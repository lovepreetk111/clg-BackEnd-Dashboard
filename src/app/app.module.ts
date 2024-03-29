import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BreadcrumbModule} from 'angular-crumbs';
import { DataTableComponent } from './data-table/data-table.component';
import { RouterModule } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { LoginFormComponent } from './Auth/login-form/login-form.component';
import { RegistrationFormComponent } from './Auth/registration-form/registration-form.component';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { AdminloginComponent } from './Auth/adminlogin/adminlogin.component';
import {TableModule} from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
// import {ButtonModule} from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';



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
    LoginFormComponent,
    RegistrationFormComponent,
    DisplayComponent,
    AdminloginComponent
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    FormsModule,
    CommonModule,
    TableModule,
    ButtonModule,
    MenuModule,
    RouterModule,
    CheckboxModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    ConfirmPopupModule,
    ToastModule,
    RippleModule
    

    
  ],    
  providers: [ConfirmationService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
