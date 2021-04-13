// const cat = ('Love me, pet me! HSSSSSS!');
// const catArray = ('ONE', 'TWO', 'THREE');

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(cat);
//     } else {
//         const randIndex = Math.floor(Math.random() * 3);
//         console.log(catArray[randIndex]);
//    }
// }

// const kitty = 'THIS IS AN ODD NUMBER';
// const kittyArray = ["ONE", "TWO", "THREE"];
// for (let i = 1; i < 20; i++) {
//     if (i % 2 === 1) {
//     console.log(kitty, i);
//     } else {
//         const randomIndex = Math.floor(Math.random() * 3)
//     console.log(kittyArray[randomIndex]);
//     }
// }
 
// console.log(Math.floor((Math.random() * 101)));

//////////////////////////////////////////////////////
/////////////////FIZZBUZZ V.2/////////////////////////
// for(let i=1; i<=100; i++) {
//     let output = ''
//     if (i % 3 === 0) {
//         output = output + 'Fizz';
//     }
//     if (i % 5 === 0) {
//         output = output + 'Buzz';
//     }
//     if (output === '') {
//         output = i;
//     }
//     console.log(output)
// }

/////////////////////////////////////////////////
/////////////////////////////////////////////////

////////////////////NINJA TURTLES///////////////////
// const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

// for (let i = 0; i < turtles.length; i++) {
//     console.log(turtles[i].toUpperCase());
    
// }


// const turtles = ['Don', 'Leo', 'Raph', 'Mich'];

// const turtlesCase = [];

// for (let k = 0; k < (turtles.length); k++) {
//     let newTurtle = '';

//     for (let i = 0; i < turtles[k].length; i++) {
//         if (i % 2 === 0) {
//             newTurtle += turtles[k][i].toUpperCase();
//         } else {
//             newTurtle += turtles[k][i].toLowerCase();
//         }
//     }
//     turtlesCase.push(newTurtle);
// }

// console.log(turtlesCase)





// for (let i=0; i <= turtles.length; i++) {
//     console.log(turtles[i].toUpperCase());
//     // console.log(turtles[i].split(''));
// }


const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

const kristynShoe = kristynsCloset.shift();

//console.log(kristynsCloset)
thomsCloset[2].push(kristynShoe);

// console.log(thomsCloset)


const outfit1 = kristynsCloset.shift();
const outfit2 = [];
const outfit3 = [];

 

for (let i = 0; i < kristynsCloset.length; i++) {
  const item = kristynsCloset[i];
  // console.log(`WHIRR: Now washing ${item}`);
}

// console.log(thomsCloset)

for (let i = 0; i <= thomsCloset.length; i++) {
  console.log(thomsCloset[i])
}



  // console.log(`Kristyn's outfits this week are: (1) ${kristynsCloset[3]} and ${kristynsCloset[2]} with ${kristynsCloset[0]}, (2) ${kristynsCloset[1]} and ${kristynsCloset[4]} with ${kristynsCloset[5]}, and (3) ${kristynsCloset[0]} and ${kristynsCloset[2]} with ${kristynsCloset[3]}.`)


  // console.log(`Thom's outfits this week are: (1) ${thomsCloset[0][1]} and ${thomsCloset[2][2]} with ${thomsCloset[0][2]}, (2) ${thomsCloset[1][1]} and ${thomsCloset[0][0]} with ${thomsCloset[2][0]}, and (3) ${thomsCloset[1][2]} and ${thomsCloset[0][1]} with ${thomsCloset[2][2]}.`)


  const kristynShoe = kristynsCloset.shift();
console.log(kristynShoe);

thomsCloset[2].push(kristynShoe);
console.log(thomsCloset);