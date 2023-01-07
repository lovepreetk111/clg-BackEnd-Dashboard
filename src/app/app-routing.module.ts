import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { NoticeComponent } from './notice/notice.component';

const routes: Routes = [
  {
    path:'carousel',component:DataTableComponent
  },
  {
    path:'notice', component:NoticeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
