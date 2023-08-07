// const bowl = {
//     'apple': {color: 'red', weight: 136.078},
//     'banana': {color: 'yellow', weight: 183.15},
//     'orange': {color: 'orange', weight: 170.097},
//     'banana': {color: 'yellow', weight: 176.12},
// };

// console.log(bowl)

// using a recursive function, find the total divisors of a number

function divisors(num, div = num, count = 0) {
    if (div === 0) return count;
    if (num % div === 0) count++;
    return divisors(num, div - 1, count);
}
// what is happening in this function?


console.log(divisors(10)); // 4
console.log(divisors(5)); // 2

