// Immmediately Invoked Function Expression (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNCETED`);
}) ();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )( 'ANISH') 
//anishfd ifod
