// implement a function called totalBirdCount, the function accepts an array that contains the bird count per day.
// the function should retrun the total number of birds that countedd.

const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
const totalBirdCount = (birds) => {
    // so in short this function will be accessing each number and add it to the next one.
    // how can we do that(adding numbers in the array)
    //-> initialize the total value,
    // get each item and add it to the total item for each iteration.
    // later we will return the total:
    let total = 0;
    for(const item of birds) {
        total+= item;
    }
    return total;
}

const totalBirds = totalBirdCount(birdsPerDay);

const birdsInWeek = (birdsPerDay, weekNumber) =>{
    let totalInWeekTwo = 0
    for(let i = 7; i < birdsPerDay.length; i++) {
        totalInWeekTwo += birdsPerDay[i];
    }
    return totalInWeekTwo;
}

const totalInWeekTwo = birdsInWeek(birdsPerDay, 2);
// implement a function birdsPerWeek that accepts an array of bird counts per day and a week number.
// the function shou;d return the total number that you counted in that specific week.

const weekOne = [2, 5, 0, 7, 4, 1]
const fixBirdCounting = (weekOne) => {
    for(let i = 0; i < weekOne.length; i++) {
        if(i % 2 === 0) {
            weekOne[i]++;
        }
    }
    console.log(weekOne);
}
fixBirdCounting(weekOne);

const addTo = (num) => {
    let sum = 0;
    for(let i = 0; i <= num; i++) {
        sum += i;
    }
    console.log(sum);
}

addTo(5)