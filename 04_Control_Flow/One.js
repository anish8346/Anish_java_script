// //if
// const isUserloggedIn = true
// const temperature = 41

// if (temperature === 40) {
//     console.log("less than 50");
// } else {
//     console.log("Temperature is Greater than 50");
// }

// console.log("Execute");

// // <,>,<=,>=, == , !=, ===, !==

// const score = 200

// if (score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// const balance = 1000

// // if (balance > 500) console.log("test"),console.log("test2");

// if(balance < 500){
//     console.log("Less than 500");
// } else if (balance < 750){
//     console.log("Less than 750");

// }else if (balance < 900){
//     console.log("Less than 750");

// } else{
//     console.log("Less than 1200");
// }

const UserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInfromEmail = true

if (UserloggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInfromEmail) {
    console.log("User logged in");
}