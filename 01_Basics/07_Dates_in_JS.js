// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

 //let myCreatedDate = new Date(2025,1,7)
// let myCreatedDate = new Date(2023,0,23,5,3)
// let myCreatedDate = new Date("2025-02-07")
// let myCreatedDate = new Date("02-07-2025")

console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(mycreateDate.toLocaleString());
 //console.log(Math.floor(Date.now()/1000));

 let newDate = new Date()
 console.log(newDate);
 console.log(newDate.getMonth());
 console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",

})




