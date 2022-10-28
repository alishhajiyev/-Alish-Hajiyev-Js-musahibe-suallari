// First task
// const arr = ['sense.', 'make', 'all', 'will', 'This'];
// function reverseArray(arr){
//     return arr.reverse()
// }
// console.table(reverseArray(arr));

// Second task
const arrTwo = ['Blorgous', 'Glamyx', 'Wegord', 'SpaceKing'];
function greetAliens() {
    for (let name of arrTwo) {
        console.log(`Oh powerful ${name}, we humans offer our unconditional surrender!`);
    }
}
greetAliens(arrTwo);

// Third task
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'my room', 'temporary tattoos'];
const myStuff = ['sweaters', 'skateboards', 'family-night', 'my room'];

let justCoolStuff = coolStuff.filter((value) => {
    return myStuff.includes(value);
})
console.log(justCoolStuff);
console.log('Fourth task')
// Fourth task
const meal = [
    { name: 'arugula', source: 'plant' },
    { name: 'tomatoes', source: 'plant' },
    { name: 'lemon', source: 'plant' },
    { name: 'olive oil', source: 'plant' },
];
const dinner = [
    { name: 'hamburger', source: 'meat' },
    { name: 'cheese', source: 'dairy' },
    { name: 'ketchup', source: 'plant' },
    { name: 'bun', source: 'plant' }
];

function isTheDinnerVegan(arry) {
    for (let elem of arry) {
        if (Object.values(elem)[1] === 'plant') {
            return true;
        }else{
            return false;
        }
    }
}

console.log(isTheDinnerVegan(meal));
console.log(isTheDinnerVegan(dinner));

