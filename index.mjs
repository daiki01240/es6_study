// //class 
// var Person = function (name, age) {
//     this.name = name;
//     this.age = age;
// };
 
// Person.prototype.jump = function () {
//     console.log("ジャンプ");
// };

// var person = new Person("太郎", 30);
// person;
// person.jump;

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
    static setName(person, name){
        person.name = name; 
    }
    // jump(){
    //     console.log("jump");
    // }
}
let person = new Person("太郎", 30);
// person.jump();
//console.log(person);

class Employee extends Person {
  constructor(name, age, years) {
    super(name, age);
    this.years = years;
    } 
    getName() {
        return super.getName() + "従業員";
    }
//   jump() {
//       super.jump();
//     console.log("jumpJUMP");
//   }
  quit() {
    console.log(`I am quit this work ${this.years}`);
  }
}

let employee = new Employee("taro", 20,15);
//employee.jump();
//employee.quit();
console.log(employee.getName());

Person.setName(employee, "ziro");
console.log(employee) ;

class Student {
    constructor(name,age){
        this._name = name;
        this._age = age;
    }
    get name(){
        return "["+ this._name + "]";
    }
    set name(name){
        this._name = name;
    }
}

let student = new Student("太郎",20);
console.log(student);
let name = student.name;
console.log(name);

student.name = "daigorou";
console.log(student._name);