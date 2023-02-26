import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutchetanaComponent } from './dashboard/home/aboutchetana/aboutchetana.component';
import { AcademicsComponent } from './dashboard/home/academics/academics.component';
import { CampusComponent } from './dashboard/home/campus/campus.component';
import { CarouselComponent } from './dashboard/home/carousel/carousel.component';
import { TestimonialsComponent } from './dashboard/home/testimonials/testimonials.component';
import { DataTableComponent } from './data-table/data-table.component';
import { NoticeComponent } from './notice/notice.component';
import { CoursesComponent } from './page/courses/courses.component';
import { ExaminationComponent } from './page/examination/examination.component';
import { PlacementComponent } from './page/placement/placement.component';
import { ResearchComponent } from './page/research/research.component';
import { StudentscornerComponent } from './page/studentscorner/studentscorner.component';

const routes: Routes = [
  // {
  //   path:'home/carousel',component:DataTableComponent
  // },
  {
    path:'home/carousel',component:CarouselComponent
  },
  {
    path:'home/aboutchetana',component:AboutchetanaComponent
  },
  {
    path:'home/academics',component:AcademicsComponent
  },
  {
    path:'home/campus',component:CampusComponent
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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
