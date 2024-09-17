"use strict";
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
const e = new Employee("Push", 21);
e.greet("hi");
