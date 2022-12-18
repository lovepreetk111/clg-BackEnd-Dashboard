export interface IBannerCarosuelComponent {
    // id:string
    innerData:IinnerData
    background:Ibackground
    image:Iimage[]
    routeLink:string
    carouselDetails:IcarouselInfo[]
    createdAt:string
    updatedAt:string
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
    description:string
}

/* export class BannerDatas{
    public innerData : IinnerData[]
} */