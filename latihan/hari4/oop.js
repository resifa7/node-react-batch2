/**
 * Di dalam dunia pemrograman dikenal sebuah konsep dengan nama OOP atau
Object Oriented Programming. Secara sederhana, dengan konsep OOP maka
segala sesuatu dapat kita anggap sebagai sebuah Object.
 */

// Class
class Car {
  constructor(brand, factory) {
    this.brand = brand;
    this.factory = factory;
    this.sound = "honk! honk! vroomvroom";
  }
}

const myCar = new Car("Ford", "Italy");
console.log(myCar);

//Method
/**
 * Sintaks constructor pada class merupakan method khusus, dimana dilakukan
inisialisasi properties, yang akan dieksekusi secara otomatis ketika class dibuat, dan
ia harus memiliki nama "constructor". (Jika tidak dituliskan, maka Javascript akan
menambahkan method constructor kosong secara otomatis).
 */

class Car2 {
  constructor(brand) {
    this.carname = brand;
    this.color = "";
  }

  present(x = "Hello") {
    return `${x} I have a ${this.carname}`;
  }
}

const myCar2 = new Car2("Ford");
myCar2.color = "Red";
myCar2.type = "Matic";
console.log(myCar2);
console.log(myCar2.present("Hi"));

//Getters Setters

class Car3 {
  constructor(brand) {
    this._carname = brand;
  }

  get carname() {
    return this._carname;
  }

  set carname(x) {
    this._carname = x;
  }
}

const myCar3 = new Car3("Ford");
myCar3.carname = "Mazda";
console.log(myCar3.carname);

//Static Method
class Car4 {
  constructor(brand) {
    this.carname = brand;
  }

  static hello() {
    return `Hello Car 4`;
  }
}

const myCar4 = new Car4("Ford");
console.log(Car4.hello());

// Inheritance
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  present() {
    return `Hallo saya ${this.name} umur ${this.age}`;
  }
}

class Introduce extends Person {
  constructor(name, age, job) {
    super(name, age, job);
    this.job = job;
  }

  // Contoh Penggunaan Overide
  //   present() {
  //     return `Umur saya ${this.age} dan nama saya adalah ${this.name}`;
  //   }

  myJob() {
    return `${this.present()} pekerjaan saya adalah ${this.job}`;
  }
}

let introduce = new Introduce("John", "20", "Guru");
console.log(introduce.myJob());
console.log(introduce.present());