// For 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        // console.log("5 is the best number");
        
    }
    // console.log(element);
    
}


for (let i = 1; i <=2; i++) {
    //console.log(`Outer Loop Value : ${i}`);
    for (let j = 1; j <=10; j++) {
        //console.log(`Inner loop value ${j} and Inner loop ${i}`);
        //console.log(i + '*' + j + ' = ' + i*j);
        
    }
}
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++){
    const element = myArray[index];
    console.log(element);
    
}

// Break and Continue

for (let index = 0; index <= 20; index++) {
   if (index == 5){
    console.log(`Detected 5`);
    break
    
   }
    console.log(`Value of i is ${index}`);
    
    
}

