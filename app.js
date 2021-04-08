////// Write a for loop that will log only the even numbers in 0 through 200.
// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }

////// Write a for loop that will log only the even numbers in 0 through 200

// for (let i = 0; i <= 200; i += 2) {
//     console.log(i);
// }

////// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
//////For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
//const kitty = 'Love me, pet me! HSSSSSS!';
//const kittyArray = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
// for (let i = 0; i < 20; i++) {
//     if (i % 2 === 1) {
//     console.log(kitty);
//     } else {
//         const randomIndex = Math.floor(Math.random() * 3)
//     console.log(kittyArray[randomIndex]);
//     }
// }


////// Write a javascript application that logs all numbers from 1 - 100 AND:

////// If a number is divisible by 3 log "Fizz" instead of the number.

////// If a number is divisible by 5 log "Buzz" instead of the number.

////// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number, "Fizz", or "Buzz".
// for (let i = 0; i <= 100; i++) {
//     if ((i % 3 === 0) && (i % 5 === 0)) {
//         console.log('FizzBuzz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else {
//         console.log(i);
//     }
// }

////// Use the following arrays to answer the questions below (name, age, hometown):
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];
////// Jim Clark decides that Kenny can't be named "Kenny" anymore. Remove "Kenny" from the kenny array and replace it with "Gameboy".
kenny.splice(0, 1, 'Gameboy');
console.log(kenny);
////// Jim Clark just had his birthday; change jimClark's array to reflect him being a year older. Don't just hard code 187--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.
jimClark.splice(1, 1, jimClark[1] + 1);
console.log(jimClark);
////// Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
ryan.splice(2, 1, "Gotham City");
console.log(ryan);
////// Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago".
reuben.pop()
reuben.push('Chicago');
//console.log(reuben);
////// Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array.
jimHaff.pop()
jimHaff.push('Boston', 'Atlanta', 'Nashville');
console.log(jimHaff);
////// Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim Haff is now, remove it from the array using
jimHaff.splice(2, 1);
console.log(jimHaff);

////// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
////// Use a for loop to call .toUpperCase() on each of them and print out the result.
for (let i=0; i <= 3; i++) {
 //   console.log(turtles[i].toUpperCase());
    //console.log(turtles[i].split(''));
}
////// Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase.

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

////// Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
// const kristynShoe = kristynsCloset.shift();
// console.log(kristynShoe);

// thomsCloset[2].push(kristynShoe);
// console.log(thomsCloset);

////// Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

// for (let i = 0; i < kristynsCloset.length; i++) {
//     const item = kristynsCloset[i];
//     console.log(`WHIRR: Now washing ${item}`);
// }

////// Thom wants to do inventory on his closet. Using bracket notation, log the arrays (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.

//console.log(thomsCloset.forEach.call);