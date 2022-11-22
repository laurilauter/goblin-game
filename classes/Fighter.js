export class Fighter {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.health = 60 + this.generateRandomInteger(40);
  }

  generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  getHealth() {
    return this.health;
  }

  isAlive() {
    let isAlive = true;
    if (this.health <= 0) {
      isAlive = false;
    }
    return isAlive;
  }

  setHit(incomingHit) {
    this.health = this.health - incomingHit;
  }
}
