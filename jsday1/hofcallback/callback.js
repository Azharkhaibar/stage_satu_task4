console.log('======= BAGIAN CALLBACK =========');


// CONTOH CALLBACK

function hello(name) {
    console.log(`nama sya ${name}`);
}

function displayText1() {
    hello('raka');
}

function displayText2() {
    hello('raka baru');
}

displayText1();
displayText2();

// CONTOH 2 CALLBACK 

const Buah = ["apple", "banana", "watermelon"];

function BuahLebihSegar(buah) {
  return `Buah ${buah} lebih segar!`;
}

Buah.forEach(function (BuahEnak, Index) {
  console.log(`${Index + 1} : ${BuahEnak}`);
  console.log(BuahLebihSegar(BuahEnak));
});
