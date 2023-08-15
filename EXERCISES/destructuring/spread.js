const addLastName = (...names) =>{
    const lastname = names.splice(3,1);
    if(names.length < 4) {
       return`not enough names`;
    } else {
        return names.map((item) => `${item} ${lastname}`).splice(2, 1)
    }
   
}
console.log(addLastName('junior', 'hirwa', 'batey', 'jojo','kimon','hello'))


