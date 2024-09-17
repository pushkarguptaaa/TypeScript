// let a: number = 4
// console.log(a)

// function greet(name: string){
//     console.log("Hi " + name );
// }

// greet("Pushkar")

// function sum(a: number, b: number): number{
//     return a + b
// }

// const val = sum(3, 4)
// console.log(val);

// function isLegal(age: number){
//     return age >= 18 ? true : false
// }

// const val1 = isLegal(18)
// console.log(val1);

// function delayed(fn: () => void){
//     setTimeout(fn, 3000)
// }

// delayed(() =>{
//     console.log("hi")
// })

// INTERFACES

// interface User{
//     fname: string,
//     lname: string,
//     age: number
// }

// function isLegal(user: User){
//     return user.age >= 18 ? true: false
// }

// const val = isLegal({
//     fname: "Pushkar",
//     lname: "Gupta",
//     age: 21
// })

// console.log(val)

// interface Person{
//     name: string,
//     age: number,
//     greet(phrase: string): void
// }

// class Employee implements Person{
//     name: string;
//     age: number;

//     constructor(name: string, age: number){
//         this.name = name
//         this.age = age
//     }

//     greet(phrase: string){
//         console.log(phrase + " " + this.name);
//     }
// }

// const e = new Employee("Push", 21)

// e.greet("hi");

// TYPES

type Employee = {
    name: string;
    startDate: Date;
  };
  
  type Manager = {
    name: string;
    department: string;
  };
  
  type TeamLead = Employee & Manager;
  
  const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
  };