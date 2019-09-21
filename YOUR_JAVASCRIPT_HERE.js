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
    hero.inventory.length = null;
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

// ADD OWN NAME TO PAGE
const namePerson = prompt("Hi there! What's your name?");
const name = document.getElementById("name");
const welcomeMsg = document.getElementById("welcome");
console.log(welcomeMsg);

if (namePerson != null) {
  name.innerHTML = `Hello, ${namePerson}!`;
  hero.name = namePerson;
}
welcomeMsg.innerHTML = `I am so happy you walked into our village. We are looking for a hero and you seems like you'd fit the part. <br><br><strong>Do you wanna help us out?</strong>`;

// DISPLAY STATS FUNCTION
function displayStats() {
  const displayStats = document.getElementById("displayStats");
  displayStats.innerHTML = `
    Name: ${hero.name} <br>
    Health: ${hero.health} <br>
    Weapon: ${hero.weapon.type} <br>
    Damage: ${hero.weapon.damage}
    `;
}

// DISPLAY STATS
displayStats();

//console.log(heroYes); // test to see if heroYes works, YES!
console.log(hero);
