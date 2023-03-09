import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbService, Breadcrumb } from 'angular-crumbs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private titleService: Title, private breadcrumbService:BreadcrumbService){}

  ngOnInit(){
 this.breadcrumbService.breadcrumbChanged.subscribe(crumb =>{
  this.titleService.setTitle(this.createTitle(crumb));
 })
  }
 private createTitle(routesCollection:Breadcrumb[]) {
    const title = 'College Dashboard';
    const titles =routesCollection.filter((route) => route.displayName);
    if(!title.length) {return title;}

    const routeTitle = this.titlesToString(titles);
    return `${routeTitle} ${title}`
  }

  private titlesToString(titles: any[]){
return titles.reduce((pre: any, curr: { displayName: any; }) => {
  return `${curr.displayName} - ${pre}`;
}, '');
  }
  getAnimationData(outlet :RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
