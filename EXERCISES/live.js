const arr = (array) => {
  const even = array.filter(item => item % 2 === 0).sort((a, b) => a - b)
  const odd = array.filter(item => item % 2 !== 0).sort((a, b) => a - b)
    console.log(even);
    console.log(odd);
    
    return [...even, ...odd]
}
console.log(arr([6,1,3,2, 5, 4, 7, 8]))