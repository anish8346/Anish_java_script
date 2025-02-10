//const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Anish"
tinderuser.isLoggedIn = false

//console.log(tinderuser);

const regularUser = {
    email: "arnav499@gmail.com",
    fullname:{
        username:{
            firstname: "Anish",
            lastname:  "Kumar"
        }
    }
}

//console.log(regularUser.fullname.username)

const Obj1 = {1: "a", 2: "b"}   
const Obj2 = {3: "a", 4: "b"}
const Obj3 = {5: "a", 6: "b"}

//const obj4 = {Obj1, Obj2, Obj3 }
//const obj4 = Object.assign({}, Obj1,Obj2,Obj3)
const obj4 = {...Obj1, ...Obj2}

//console.log(obj4);


const users = [
    {
        id: 1,
        email: "anish@gmail.com"
    },
    {
        id: 1,
        email: "anish@gmail.com"
    },
    {
        id:1,
        email: "a@gmail.com"
    },
]

users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}

course.courseInstructor

const {courseInstructor: instructor} = course

console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Anish",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]





