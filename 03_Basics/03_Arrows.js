const user = {
    username: "Anish",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to Website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sakshi"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Anish"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let usenamme = "Anish"
    console.log(this);
    
}
//chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }


//const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "Anish"})

//console.log(addTwo(5,14));

// const myArray = [2,5,3,7,8,9]

// myArray.forEach()

