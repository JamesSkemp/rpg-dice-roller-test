import { DiceRoll, DiceRoller } from "@dice-roller/rpg-dice-roller";

const roller = new DiceRoller();

console.log((roller.roll('1d6') as DiceRoll).total);
console.log((roller.roll('d%') as DiceRoll).total);
