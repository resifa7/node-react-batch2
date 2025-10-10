class Animal {
  constructor(name) {
    this._name = name;         
    this._legs = 4;             
    this._cold_blooded = false; 
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get legs() {
    return this._legs;
  }

  set legs(newLegs) {
    this._legs = newLegs;
  }

  get cold_blooded() {
    return this._cold_blooded;
  }
}

class Ape extends Animal {
  constructor(name) {
    super(name);  
    this._legs = 2; 
  }

  yell() {
    console.log("Auooo");
  }
}

class Frog extends Animal {
  constructor(name) {
    super(name); 
  }

  jump() {
    console.log("hop hop");
  }
}

var sheep = new Animal("shaun");

console.log(sheep.name);          
console.log(sheep.legs);          
console.log(sheep.cold_blooded);  
sheep.legs = 3;
console.log(sheep.legs);          

console.log("================================");

var sungokong = new Ape("kera sakti");
sungokong.yell();                 
console.log(sungokong.name);       
console.log(sungokong.legs);       
console.log(sungokong.cold_blooded); 

console.log("================================");

var kodok = new Frog("buduk");
kodok.jump();                     
console.log(kodok.name);          
console.log(kodok.legs);          
console.log(kodok.cold_blooded);  
