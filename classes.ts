class Sample{
    x : number;
    y : number;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    sumTwoNumbers():number{
        let sum:number = this.x + this.y;
        return sum;
    }
}
var sample:Sample = new Sample(3,4);
console.log(sample.sumTwoNumbers());