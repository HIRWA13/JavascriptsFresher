// const fetchProductAsPromise = () =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             reject('shirt');
//         }, 2000)
//     });
// }

// const productPromise = fetchProductAsPromise();

// const products = (product) =>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             switch(product) {
//                 case 'pants':
//                     resolve(`found product: ${product}`);
//                     break;
//                 case 'T-shirt':
//                     resolve(`found product: ${product}`);
//                     break;
//                 case 'hat':
//                     resolve(`found product: ${product}`);
//                     break;
//                 default:
//                     reject(`${product} not found`);
//             }
//         }, 100);
//     })
// }


// // function for resolve -> success
// const onSuccess = (data)=>{
//     console.log(`success => ${data}`);
// }

// // function for reject -> error:
// const onError = (err)=> {
//     console.log(`error => ${err}`)
// }

// productPromise
//     .then(products)
//     .then(onSuccess, onError)



/**
 * Re-implement the following built-ins Promise methods (without using them)
all: takes an array of promises and resolves when all of them are resolved, or rejects when one of them rejects.
allSettled: takes an array of promises and resolves when all of them either resolve or reject.
race: takes an array of promises and resolves or rejects with the value of the first promise that resolves or rejects.
any: takes an array of promises and resolves when one of them resolves, or rejects when all of them reject.
 */

// all:

const all = (promises) => {
    return new Promise((resolve, reject)=>{
        let count = 0;
        const result = [];
        promises.forEach((promise, index)=>{
            promise
                .then((data)=>{
                    count++;
                    result[index] = data;
                    if(count === promises.length) resolve(result);
                })
                .catch((err)=> {
                    reject(err);
                })
        })
    })
}

// explain to me what the heck is going on in the all function above:
// 1. we create a new promise
// 2. we create a variable called count, and set it to 0
// 3. we create an empty array called result
// 4. we iterate through the promises array using forEach
// 5. we call the promise and pass in the data and index as arguments
// 6. we increment the count by 1
// 7. we set the result array at the index to the data
// 8. we check if the count is equal to the length of the promises array
// 9. if it is, we resolve the result array
// 10. else, we reject the error


// tests for all:
const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('promise1');
    }, 1000)
});

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('promise2');
    }, 2000)
});

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('rejected');
    }, 3000)
});


all([promise1, promise2, promise3])
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })

