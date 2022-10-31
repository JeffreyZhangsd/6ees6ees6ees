class ForagerBee extends Bee {
  //might have issues extending from same class
  constructor() {
    super();

    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }

  forage(treasure) {
    this.treasureChest.push(treasure);
  }
};
