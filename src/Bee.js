//use extends to indicate subclass extending from superclass
class Bee extends Grub {
  constructor() {
    //need to use super to get super classes' properties and methods
    super();
    //set own properties after
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }
};
