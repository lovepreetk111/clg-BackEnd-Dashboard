import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './Auth/adminlogin/adminlogin.component';
import { LoginFormComponent } from './Auth/login-form/login-form.component';
import { RegistrationFormComponent } from './Auth/registration-form/registration-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutchetanaComponent } from './dashboard/home/aboutchetana/aboutchetana.component';
import { AcademicsComponent } from './dashboard/home/academics/academics.component';
import { CampusComponent } from './dashboard/home/campus/campus.component';
import { CarouselComponent } from './dashboard/home/carousel/carousel.component';
import { TestimonialsComponent } from './dashboard/home/testimonials/testimonials.component';
import { DataTableComponent } from './data-table/data-table.component';
import { NoticeComponent } from './notice/notice.component';
import { CoursesComponent } from './page/courses/courses.component';
import { BaComponent } from './page/courses/Degree college/ba/ba.component';
import { BcomComponent } from './page/courses/Degree college/bcom/bcom.component';
import { YcmouComponent } from './page/courses/Distance learning/ycmou/ycmou.component';
import { PhdCommComponent } from './page/courses/Doctoral programme/phd-comm/phd-comm.component';
import { FyjcComponent } from './page/courses/Junior college/fyjc/fyjc.component';
import { SyjcComponent } from './page/courses/Junior college/syjc/syjc.component';
import { McomComponent } from './page/courses/Post Graduation/mcom/mcom.component';
import { BafComponent } from './page/courses/Self Finance course/baf/baf.component';
import { BmmcComponent } from './page/courses/Self Finance course/bmmc/bmmc.component';
import { BmsComponent } from './page/courses/Self Finance course/bms/bms.component';
import { BscitComponent } from './page/courses/Self Finance course/bscit/bscit.component';
import { ExaminationComponent } from './page/examination/examination.component';
import { PlacementComponent } from './page/placement/placement.component';
import { ResearchComponent } from './page/research/research.component';
import { StudentscornerComponent } from './page/studentscorner/studentscorner.component';

const routes: Routes = [
  
  {
    path:'auth/admin/register',component:RegistrationFormComponent ,
   
  },
  {
    path:'auth/admin/login',component:LoginFormComponent ,
   
  },
  {
    path:'auth/superadminlogin',component:AdminloginComponent ,
   
  },
  {
    path:'admindashboard',component:DashboardComponent ,
    children: [
      {
        path:'home/carousel',component:CarouselComponent,
       
      },
      {
        path:'home/carousel',component:CarouselComponent ,
       
      },
      {
        path:'home/aboutchetana',component:AboutchetanaComponent,
    
      },
      {
        path:'home/academics',component:AcademicsComponent,
       
      },
      {
        path:'home/campus',component:CampusComponent,
       },
      {
        path:'home/testimonials',component:TestimonialsComponent
      },
      {
        path:'notice', component:NoticeComponent
      },
      {
        path:'page/courses', component:CoursesComponent
      },
      {
        path:'page/examination', component:ExaminationComponent
      },
      {
        path:'page/placement', component:PlacementComponent
      },
      {
        path:'page/research', component:ResearchComponent
      },
      {
        path:'page/studentscorner', component:StudentscornerComponent
      },
      // junior
      {
        path:'page/courses/junior/fyjc', component:FyjcComponent
      },
      {
        path:'page/courses/junior/syjc', component:SyjcComponent
      },
      // degree
      {
        path:'page/courses/degree/ba', component:BaComponent
      },
      {
        path:'page/courses/degree/bcom', component:BcomComponent
      },
    
      // sfc
      {
        path:'page/courses/sfc/bscit', component:BscitComponent
      },
      {
        path:'page/courses/sfc/bms', component:BmsComponent
      },
      {
        path:'page/courses/sfc/baf', component:BafComponent
      },
      {
        path:'page/courses/sfc/bmmc', component:BmmcComponent
      },
    
      // PG
    
      {
        path:'page/courses/pg/mcom', component:McomComponent
      },
    
      //doctoral 
    
      {
        path:'page/courses/doctoralprogramme/phd', component:PhdCommComponent
      },
    
      //distance
    
      {
        path:'page/courses/distancelearning/ycmou', component:YcmouComponent
      },
      ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
