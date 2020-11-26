//создать массивы
let fruit = ["apple","banana","orange"];
console.log(fruit);
console.log(fruit[0]);
console.log(fruit[2]);
console.log(fruit[fruit.length-1]);
for(let i = 0;i < 3;i++){
    let message = ` ${i+1}, ${fruit[i]}`;
    console.log (message);
}

fruit.forEach (element => {
    console.log (`Hello from FOREACH`,element);
});

let rnd = Math.floor(Math.random() * fruit.lenght);
console.log(rnd)

let randomFruit = fruit[rnd];
console.log(`My random fruit:`, randomFruit);

fruit.push(`avocado`);
console.log(fruit);

let bananaIndex = fruit.indexOf("banana");
console.log(`index of banana:`,bananaIndex);
fruit.splice(bananaIndex, 1)
console.log(fruit);