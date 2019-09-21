// Write your JS here

// YAY - Let's do this! :-)

// HERO OBJECT
const hero = {
  name: "Wonder Woman",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: "dagger",
    damage: 2
  }
};

//console.log(hero); //test if the hero object is declared and assigned correctly - YES!

// RESTING FUNCTION
function rest(hero) {
  if (hero.health === 10) {
    alert("You are going strong! Your healthy couldn't be any better!");
  }
  hero.health = 10;
  return hero;
}

/* TESTS
rest(hero); test if the property is reassigned correctly - YES!
rest(hero); test if the pop up alert is working correctly -  YES!
console.log(hero); // test if the property is reassigned correctly - YES!
*/

/* NOTE FOR SELF
UI FOR REST
EASY WAY
SEE HTML FILE - IF I HAVE TIME, USE THE DOM TO CREATE NEW ELEMENTS
*/

// RESTING UI
const inn = document.getElementById("inn");
// console.log(inn); // test if the img element with the "inn"-id is selected - YES!

inn.addEventListener("click", function() {
  rest(hero);
});

// PICKING UP ITEMS FUNCTION
function pickUpItem(hero, weapon) {
  hero.inventory.push(weapon);
}

// PICKING UP ITEMS UI
const weapon = document.getElementById("dagger");
// console.log(weapon); // test if the img element with the "inn"-id is selected - YES!

dagger.addEventListener("click", function() {
  hero.inventory.push(hero.weapon);
});

// EQUIP WEAPON FUNCTION
function equipWeapon(hero) {
  if (hero.inventory.length === 0) {
    hero.inventory.length === 0; // this is ugly logic. When I have more time - make this better!
  } else {
    hero.weapon = hero.inventory[0];
  }
}

// EQUIP WEAPON UI
const bag = document.getElementById("bag");
// console.log(bag); // test if the img element with the "inn"-id is selected - YES!

bag.addEventListener("click", function() {
  equipWeapon(hero);
});
