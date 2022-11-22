export class Battle {
  gang;
  hit;
  winner = "No winners";

  constructor(gang) {
    this.gang = gang;
  }

  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  //change this so that every fighter loop over all other fighters and
  //hits them according to its health and weapon stats

  async fight() {
    const hitsDiv = document.getElementById("hits");
    console.log("fight started");
    let fighters = this.gang.getFighters();
    while (this.gang.howManyLeft() > 1) {
      for (let i = 0; i < this.gang.howManyLeft(); i++) {
        //const time = Math.floor(Math.random() * 200) + 1;
        await this.sleep(100);
        if (fighters[i].isAlive()) {
          fighters[i].setHit(Math.floor(Math.random() * 50) + 1);
        }

        this.hit = `${fighters[i].name} health left: ${fighters[
          i
        ].getHealth()}`;

        //draw hit
        const hitP = document.createElement("p");
        hitP.innerHTML = this.hit;
        hitsDiv.appendChild(hitP);
        //log hits
        console.log(
          `${fighters[i].name} health left: `,
          fighters[i].getHealth()
        );
      }
    }
    //at this point we have 1 or 0 alive
    for (let i = 0; i < this.gang.getFighters().length; i++) {
      if (fighters[i].isAlive()) {
        this.winner = fighters[i].name;
      }
    }
    const winnerP = document.createElement("p");
    winnerP.innerHTML = "Winner: " + this.winner;
    hitsDiv.appendChild(winnerP);
    console.log("Winner: " + this.winner);

    //show winner
    const fightingGoblins = document.getElementsByClassName("goblin-div");
    console.log("fgobls ", fightingGoblins.length);
    for (let i = 0; i < fightingGoblins.length; i++) {
      const h3 = fightingGoblins[i].querySelector("h3");
      console.log("h3 inner ", h3.innerHTML);
      console.log("this.winner ", this.winner);
      if (h3.innerHTML === this.winner) {
        fightingGoblins[i].classList.add("winner");
      }
    }
  }

  getWinner() {
    return this.winner;
  }
}
