export class Person {
    //public name: string;
    //private address: string;

    constructor(public name:string,private address?:string = 'no address'){}
}

/* export class Hero extends Person{
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ){
        super(realName,'new york');
    }
} */

export class Hero{
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person:Person
    ){
    }
}

const tony = new Person('Tony stark','new york')
const ironman = new Hero('fernando',45,'tony',tony)
console.log(ironman)
