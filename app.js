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
// const kitty = 'Love me, pet me! HSSSSSS!';
// for (let i = 0; i < 20; i++) {
//     console.log(kitty);
// }

// for (i = 0; i < 20; i += 2) {
//     Math.random(console)
// }

////// Write a javascript application that logs all numbers from 1 - 100 AND:

////// If a number is divisible by 3 log "Fizz" instead of the number.

////// If a number is divisible by 5 log "Buzz" instead of the number.

////// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number, "Fizz", or "Buzz".
// for (let i = 0; i <= 100; i++) {
//     console.log(i);
//     if (i % 3) {
//         console.log('Fizz');
//     } else if (i % 5) {
//         console.log('Buzz');
//     } else if ((i % 3) && (i % 5)) {
//         console.log('FizzBuzz');
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
const jimNewAge = jimClark[1] + 1;
console.log(jimNewAge);
////// Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
ryan.splice(2, 1, "Gotham City");
console.log(ryan);
////// Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago".
reuben.pop()
reuben.push('Chicago');
console.log(reuben);
////// Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array.
jimHaff.pop()
jimHaff.push('Boston', 'Atlanta', 'Nashville');
console.log(jimHaff);
////// Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim Haff is now, remove it from the array using
jimHaff.splice(2, 1);
console.log(jimHaff);