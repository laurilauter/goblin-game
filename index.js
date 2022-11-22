import { Fighters } from "./classes/Fighters.js";
import { Weapons } from "./classes/Weapons.js";
import { Battle } from "./classes/Battle.js";

const gang = new Fighters();

//draw goblins
const fightersDiv = document.getElementById("fighters");
function drawGoblins() {
  const fighters = gang.getFighters();
  clearFields();
  fighters.forEach((fighters, index) => {
    const goblinDiv = document.createElement("div");
    goblinDiv.classList.add("goblin-div");
    goblinDiv.id = `goblin-${index}`;
    goblinDiv.innerHTML = `
    <div id="goblin-img-div">
    </div>
      <h3>${fighters.name}</h3>
      <p>Health: ${fighters.health}</p>
      <p>Weapon: ${fighters.weapon.name}</p>`;
    fightersDiv.appendChild(goblinDiv);
  });
}

function createFighters(amount) {
  for (let i = 0; i < amount; i++) {
    gang.newFighter(`Goblin ${i + 1}`, Weapons.Sword);
  }
  return gang;
}

function clearFields() {
  const hitsDiv = document.getElementById("hits");
  hitsDiv.innerHTML = "";
  fightersDiv.innerHTML = "";
}

// //draw fight
//fight is drawn from Battle.js

const goblinsAmount = document.createElement("input");
goblinsAmount.type = "number";
goblinsAmount.id = "amount-of-goblins";
goblinsAmount.min = "2";
goblinsAmount.max = "3";
goblinsAmount.value = "2";
const startBtn = document.createElement("button");
startBtn.innerHTML = "Fight";
startBtn.id = "start";
const controlsDiv = document.getElementById("controls");
controlsDiv.appendChild(goblinsAmount);
controlsDiv.appendChild(startBtn);

startBtn.addEventListener("click", function () {
  gang.clearFighters();
  const battle = new Battle(createFighters(goblinsAmount.value));
  drawGoblins();
  battle.fight();
});
