
function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
}

//sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
    let result = number1 + number2
    return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)

//console.log("Result:", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please Enter a username");
        return
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage("Anish"))
// console.log(loginUserMessage("Anish"))

function calculateCartPrice(val1, val2){
    return num1
}

console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username: "anish",
    prices:199
}

function handleObject (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}

handleObject(user)
handleObject({
    username: "Anny",
    price:399
})

const myNewArray = [200,400,100,600]

function returnSecondvalue(getArray){
    return getArray[1]
}

console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200,400,500,1000]));