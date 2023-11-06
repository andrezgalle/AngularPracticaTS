function addNumbers(a:number, b:number){
    return a +b;
}

const result:string = addNumbers(1,2).toString()
//console.log({result})

//funciones flecha
const addNumbersArrow = (a:number, b:number) :string => {
    return `${ a + b }`;
}

//console.log(addNumbersArrow(1,2))

function multiply(firstNumber: number, secondNumber?:number, base:number = 2){
    return firstNumber * base;
}

const multiplyResult = multiply(5)
//console.log(multiplyResult)


interface Character{
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character:Character, amount:number) => {
    character.hp += amount
}

const strider: Character = {
    name: 'Strider',
    hp:90,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)
    },
}

healCharacter(strider,10)
strider.showHp()

export {

}