// Practical task
// Prototype and Inheritance, Classes, Constructor practical task

// Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal

//one way
const animal = {
  move: function () {
    console.log('Animal is moving');
  }
};
const cat = Object.create(animal);
cat.move();


//another way
function Animal() { }
Animal.prototype.move = function () {
  console.log('The animal moves');
};
function Cat() { }
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
const myCat = new Cat();
myCat.move();

//yet another way
class Animal {
  move() {
     console.log("Animal is moving");
   }
}

class Cat extends Animal { }
const animal1 = new Animal();
const cat1 = new Cat();
animal1.move();
cat1.move();