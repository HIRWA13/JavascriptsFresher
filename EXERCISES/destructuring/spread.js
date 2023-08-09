const addLastName = (...names) =>{
    const lastname = names[2];
    if(names.length < 4) {
       return`not enough names`;
    } else {
        return names.map((item) => `${item} ${lastname}`)
    }
   
}
console.log(addLastName('junior', 'hirwa', 'batey', 'jojo','kimon','hello'))


