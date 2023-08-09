// given an array `[name, age, country]`. desttructure the array to obtain  the values and store them in variables:

const arrayInfo = (arr) => {
    const [name, age, country] = arr;
    const UserName = name;
    const userAge = age;
    const UserCountry = country;
    console.log(`the username of our user is ${UserName}`)
    console.log(`he is ${userAge} years old`)
    console.log(`our user is from ${UserCountry}`)
}
arrayInfo(['Junior', 23, 'Rwanda'])
