/**
 * Write a function that simulates an asynchronous operation using a Promise. The function should take a number as input and resolve the promise after that number of seconds.
 */

// write a function that takes an argument 

function resolveLater(sec) {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(`The promisse has been resolved after ${sec} seconds`)
        }, sec * 1000);
    })
}

async function asyncCall (){
    console.log('calling');
    const result = await resolveLater(2);
    console.log(result);
}

asyncCall();