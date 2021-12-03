
class Myfunction{
    x : number;
    y : number;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    };

    sumNum(){
        console.log("sum = " + (this.x + this.y));
    }
}

var myfunction  = new Myfunction(3,4);
myfunction.sumNum();