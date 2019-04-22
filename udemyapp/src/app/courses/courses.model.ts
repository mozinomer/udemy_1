export class courses
{
    constructor(
        public name:string,
        public description:string,
        public image:string,
        public price:number,
        public old_price:number,
        public isBestSeller:boolean,
        public currency:string
    ) {}
}
