interface ISample{
    numberone: number;
    numbertwo: number;
    sum:()=>number;
}

var data:ISample = {
    numberone : 2,
    numbertwo : 4,
    sum():number{
        return this.numberone + this.numbertwo;
    }
};

console.log(data.sum())