export interface IBannerCarosuelComponent {
    innerData:IinnerData
    background:Ibackground
    image:Iimage
    routeLink:string
    carouselDetails:IcarouselInfo
   
}

export interface IinnerData{
    header:string;
    text:string,
    buttonText:string
}
export interface Ibackground{
    url:string,
        alt:string,
}
export interface Iimage{
    url:string,
        alt:string
}
export interface IcarouselInfo{
    name:string,
    createdBy:string,
    modifiedBy:string,
    description:string
}