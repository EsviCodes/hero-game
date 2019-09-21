// Write your JS here

// YAY - Let's do this! :-) - EV

// HERO OBJECT
const hero = {
  name: "New Hero",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: "You have to pick your weapon first and add it to your bag!",
    damage: 2
  }
};

//console.log(hero); //test if the hero object is declared and assigned correctly - YES!

// RESTING FUNCTION
function rest(hero) {
  if (hero.health === 10) {
    alert("You are fully rested. Go beat the villain");
  }
  hero.health = 10;
  return hero;
}

// RESTING UI
const inn = document.getElementById("inn");
inn.addEventListener("click", function() {
  rest(hero);
});

// PICKING UP ITEMS FUNCTION
function pickUpItem(hero, weapon) {
  hero.inventory.push(weapon);
}

// PICKING UP ITEMS UI
// PICKING UP THE DAGGER
const dagger = document.getElementById("dagger");
const pickDagger = { type: "dagger", damage: 2 };
dagger.addEventListener("click", function() {
  hero.inventory.unshift(pickDagger);
});

// PICKING UP POISON
const poison = document.getElementById("poison");
const pickPoison = { type: "poison", damage: 3 };
poison.addEventListener("click", function() {
  hero.inventory.unshift(pickPoison);
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
bag.addEventListener("click", function() {
  equipWeapon(hero);
  return displayStats(hero);
});

// ADD OWN NAME TO PAGE
const namePerson = prompt("Hi there! What's your name?");
const name = document.getElementById("name");
const welcomeMsg = document.getElementById("welcome");

if (namePerson !== null) {
  name.innerHTML = `Hello, ${namePerson}!`;
  hero.name = namePerson;
  welcomeMsg.innerHTML = `I am so happy you walked into our village. We are looking for a hero and you seems like you'd fit the part.
  <br>
  <br>
  <strong>Do you wanna save us?</strong>
  <br>
  <br>
  <div class="button">
    <button id="yes" type="default">I'm your hero!</button>
  </div>
  <div class="button">
   <a href="bye-bye.html">
     <button id="no" type="default">
        No way, I'm too scared. I think I'm gonna leave. Bye bye
     </button>
   </a>
  </div>`;
}

// DISPLAY STATS FUNCTION
function displayStats(hero) {
  const displayStats = document.getElementById("displayStats");
  displayStats.innerHTML = `
    <strong>GREAT!</strong>
    <br>
    <br>
    Thank you so much for helping us out. Below you see your <strong>stats</strong>. You haven't picked a weapon yet to beat the villain. Thankfully, he is not here right now, but when the evening falls, he will come into our village to terrorize us. But I have no doubt you are going to save us all.
    <br>
    <br>
    The sun has almost set, so choose your weapon quickly and store it in your bag. If you need to rest during your quest, you can stay in our inn.
    <br>
    <br>
    Good luck! The future of our village lays in your hands.
    <br>
    <br>
    <strong>STATS</strong>
    <br>
    Name: ${hero.name} <br>
    Health: ${hero.health} <br>
    Weapon: ${hero.weapon.type} <br>
    Damage: ${hero.weapon.damage}
    `;
}

// DISPLAY STATS AS YES-BUTTON IS CLICKED
const yesButton = document.getElementById("yes");
yes.addEventListener("click", function() {
  displayStats(hero);
});
