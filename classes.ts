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

// Extending a class properities

class User{
    name : string;
    age : number;

    constructor(name: string,age: number){
        this.name = name;
        this.age = age;
    }
}

class Person extends User{
    nickname: string;

    constructor(nick: string,name: string, age:number){
        super(name,age);

        this.nickname = nick;
    }
}
