// what are promises:
/**
 * Same way in real life, when it comes to promise stuffs, there are always
 * two people involved:
 * the maker: the person who makes the promise
 * the reciever: the person who the promise was made to.
 * 
 * the same thing happens in code: 2 parties are involved
 * -> the Promise Maker
 * -> the Promise Reeciever
 * 
 * 1. Promise Maker: 
 * -> the Promise Maker is a function that creates the promise
 * -> the promise maker is an Asynchronous function
 * 
 * 2. Promise Reciever:
 * -> the Promise Receiver is a part code(it can be a function or not) that
 * takes the promise and use it.
 * -> the reciever calls the maker and use the promise that maker has created
 */

// promise maker:
/**
 * Promise Scenario:
 * consider a function that will have to fetch some data to an external
 * API, in a meantime the function does not have what we are requesting
 * and it needs something to give us showing us that tho it does not have
 * what we want for now, it is going out to find the data and it will give
 * us the data we want when it gets to it.
 * 
 * the function be like:
 * "Hey, I don't have the data you want yet but here is a promise that am
 * going out to find them and I will give them to you the moment I get them
 * too"
 * 
 * "let's take an example of a plane ticket:
 * when you buy a plane ticket, you dont get the ride right away, instead
 * that ticket is a promise to the ride you will get in the future.
 * "
 */

// function getWeather() {
//     /**
//      * because the promise maker is an asynch function[means it takes]
//      * a known amount of time to run, it needs to return something
//      * directly and in this case it creates a promise and returns it 
//      * imediately
//      */
//     /**
//      * a Promise takes a function where you write the Async logic
//      * of our code
//      */
//     return new Promise(function(resolve, reject){
//         // Async logic
//         setTimeout(function(){
//             resolve()
//         })
//     })
// }

// the phases of a Promise:
/**
 * a promise object can have one of the following 3 phases:
 * -> Pending: a Promise object is in a Pending phase when we are still
 *             waiting for it to return something from it
 * -> Resolved: a promise is in  resolved phase when it has fullfiled what we wanted
 *              from it.
 * -> Rejected: a promise is in reject phase when it has finished
 *              but it gave us the data we were not expecting from it.
 */

// the promise Receiver:
/**
 * the promise receiver calls the maker and use the promise
 * -> from the promise Receiver, that's where we call the Async 
 *   func from.
 */

// Promises in Action:
// maker:
function getWeather() {
    return new Promise(function(resolve, reject){
            setTimeout(()=> {
                resolve('partly claudy')
            }, 100);
    })
} 

// receiver:
const promise = getWeather();


function getWeatherDescription(weather){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            switch(weather) {
                case 'sunny':
                    resolve(`the weather today is ${weather}`);
                    break;
                case 'rainy': 
                    resolve(`the weather today is ${weather}`);
                    break;
                case 'claudy':
                    resolve(`the weather today is ${weather}`);
                    break;
                default:
                    reject(`error: ${weather} weather not found`)
            }
        }, 100)
    })
}


function onSuccess(data){
    console.log(`Success: ${data}`);
}

function onError(err){
    console.log(`Error: ${err}`);
}


promise
    .then(getWeatherDescription)
    .then(onSuccess, onError); // this will return 'it is sunny' because the promise is resolved


// the then() method, takes two functions as arguments:
// 1. the function that calls the resolve (represents the resolve)
// 2. the function that calls or represents the reject.