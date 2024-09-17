let a: number = 4
console.log(a)

function greet(name: string){
    console.log("Hi " + name );
}

greet("Pushkar")

function sum(a: number, b: number): number{
    return a + b
}

const val = sum(3, 4)
console.log(val);

function isLegal(age: number){
    return age >= 18 ? true : false
}

const val1 = isLegal(18)
console.log(val1);

function delayed(fn: () => void){
    setTimeout(fn, 3000)
}

delayed(() =>{
    console.log("hi")
})