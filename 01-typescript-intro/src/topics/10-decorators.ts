function classDecorator(
    constructor: any
){
    return class extends constructor{
        newProperty = 'New Property';
        hello = "override"
    }
}
    


@classDecorator
export class SuperClass {
    public myProperty: string = 'abc123'

    
    print(){
        console.log('hola mundo')
    }
}

const myClass = new SuperClass()
console.log(myClass)