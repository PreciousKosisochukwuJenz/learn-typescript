function voidFunction():void{
    console.log("Called void function");
}

function stringFunction():string{
    console.log("Called string function");
    return "";
}

function numberFunction():number{
    console.log("Called number function");
    return 1;
}

function booleanFunction():boolean{
    console.log("Called boolean function");
    return true;
}


function arrayFunction():string[]|number[]|boolean[]{
    console.log("Called array function");
    return [];
}

function objectFunction():object{
    console.log("Called object function");
    return {};
}

console.log(voidFunction());
console.log(stringFunction());
console.log(numberFunction());
console.log(booleanFunction());
console.log(arrayFunction());
console.log(objectFunction());




