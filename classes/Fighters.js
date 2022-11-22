import { Fighter } from "./Fighter.js";

export class Fighters {
  constructor() {
    this.fighters = [];
  }

  getFighters() {
    return this.fighters;
  }

  clearFighters() {
    this.fighters = [];
  }

  newFighter(name, weapon) {
    let fighter = new Fighter(name, weapon);
    this.fighters.push(fighter);
    return fighter;
  }

  isAnybodyAlive() {
    let isAnybodyAlive = true;
    for (let i = 0; i < this.fighters.length; i++) {
      if (!this.fighters[i].isAlive()) {
        isAnybodyAlive = false;
      }
    }
    return isAnybodyAlive;
  }

  howManyLeft() {
    let howManyLeft = this.fighters.length;
    for (let i = 0; i < this.fighters.length; i++) {
      if (!this.fighters[i].isAlive()) {
        howManyLeft -= 1;
      }
    }
    return howManyLeft;
  }
}
