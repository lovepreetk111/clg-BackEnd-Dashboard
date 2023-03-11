import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './Auth/adminlogin/adminlogin.component';
import { AuthGuard } from './Auth/auth.guard';
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
    
    path:'admindashboard',component:DashboardComponent ,
    data:{breadcrumb:'Dashboard'},
    canActivate:[AuthGuard],
    
    children: [
      {
        path:'home',component:CarouselComponent,
        data:{breadcrumb:'Home'}
      },
      {
        path:'home/carousel',component:CarouselComponent ,
        data:{breadcrumb:'Home/carousel'}
       
      },
      {
        path:'home/aboutchetana',component:AboutchetanaComponent,
        data:{breadcrumb:'Home/About'}
    
      },
      {
        path:'home/academics',component:AcademicsComponent,
        data:{breadcrumb:'Home/academics'}
       
      },
      {
        path:'home/campus',component:CampusComponent,
        data:{breadcrumb:'Home/campus'}

       },
      {
        path:'home/testimonials',component:TestimonialsComponent,
        data:{breadcrumb:'Home/testimonial'}

      },
      {
        path:'notice', component:NoticeComponent,
        data:{breadcrumb:'notice' }

      },
      {
        path:'page/courses', component:CoursesComponent,
        data:{breadcrumb:'page/course'}
      },
      {
        path:'page/examination', component:ExaminationComponent,
        data:{breadcrumb:'page/examination'}
      },
      {
        path:'page/placement', component:PlacementComponent,
        data:{breadcrumb:'page/placement'}

      },
      {
        path:'page/research', component:ResearchComponent,
        data:{breadcrumb:'page/research'}
        
      },
      {
        path:'page/studentscorner', component:StudentscornerComponent,
        data:{breadcrumb:'page/studentscorner'}

      },
      // junior
      {
        path:'page/courses/junior/fyjc', component:FyjcComponent,
        data:{breadcrumb:'page/courses/junior/fyjc'}

      },
      {
        path:'page/courses/junior/syjc', component:SyjcComponent,
        data:{breadcrumb:'page/courses/junior/syjc'}

      },
      // degree
      {
        path:'page/courses/degree/ba', component:BaComponent,
        data:{breadcrumb:'page/courses/degree/ba'}
        
      },
      {
        path:'page/courses/degree/bcom', component:BcomComponent,
        data:{breadcrumb:'page/courses/degree/bcom'}

      },
    
      // sfc
      {
        path:'page/courses/sfc/bscit', component:BscitComponent,
        data:{breadcrumb:'page/courses/sfc/bscit'}

      },
      {
        path:'page/courses/sfc/bms', component:BmsComponent,
        data:{breadcrumb:'page/courses/sfc/bms'}

      },
      {
        path:'page/courses/sfc/baf', component:BafComponent,
        data:{breadcrumb:'page/courses/sfc/baf'}

      },
      {
        path:'page/courses/sfc/bmmc', component:BmmcComponent,
        data:{breadcrumb:'page/courses/sfc/bmmc'}
        
      },
    
      // PG
    
      {
        path:'page/courses/pg/mcom', component:McomComponent,
        data:{breadcrumb:'page/courses/pg/mcom'}

      },
    
      //doctoral 
    
      {
        path:'page/courses/doctoralprogramme/phd', component:PhdCommComponent,
        data:{breadcrumb:'page/courses/doctoralprogramme/phd'}

      },
    
      //distance
    
      {
        path:'page/courses/distancelearning/ycmou', component:YcmouComponent,
        data:{breadcrumb:'page/courses/distancelearning/ycmou'}

      },
      {
        path:'auth/superadminlogin',component:AdminloginComponent ,
       
      },
      ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
