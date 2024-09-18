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

// type Employee = {
//     name: string;
//     startDate: Date;
//   };
  
//   type Manager = {
//     name: string;
//     department: string;
//   };
  
//   type TeamLead = Employee & Manager;
  
//   const teamLead: TeamLead = {
//     name: "harkirat",
//     startDate: new Date(),
//     department: "Software developer"
//   };

// ARRAYS

// function maxValue(arr: number[]) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max;
// }

// console.log(maxValue([1, 2, 3]));

// interface User {
// 	firstName: string;
// 	lastName: string;
// 	age: number;
// }

// function filteredUsers(users: User[]) {
//     return users.filter(x => x.age >= 18);
// }

// console.log(filteredUsers([{
//     firstName: "harkirat",
//     lastName: "Singh",
//     age: 21
// }, {
//     firstName: "Raman",
//     lastName: "Singh",
//     age: 16
// }, ]));

// ENUMS

enum Direction {
    Up,
    Down,
    Left,
    Right
}

enum Direction1 {
    Up = "UP",
    Down = "Down",
    Left = "Left",
    Right = 'Right'
}

function doSomething(keyPressed: Direction) {
 	// do something.
}

doSomething(Direction.Up)

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
       // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })


// GENERICS

function getFirstElement(arr: (string | number)[]) {
    return arr[0];
}

const el = getFirstElement([1, 2, 3]);


function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);


function getFirstElement1<T>(arr: T[]) {
    return arr[0];
}

const el1 = getFirstElement1<String>(["harkiratSingh", "ramanSingh"]);
console.log(el1.toLowerCase())