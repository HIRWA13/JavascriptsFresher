// impliment a function that takes in string as names, return the names combined and then the last one should be capitalized:

const combineNames = (...names) => {
    if(names.length > 1) {
        const namesSeparated =names.join(" ").split(" ");
        const lastName = namesSeparated[namesSeparated.length - 1];
        const fullName = `${namesSeparated.slice(0,-1).join(" ")} ${lastName.toUpperCase()}`;
        console.log(fullName);
    } else {
       console.log(names.join(""))
    }
   
}
combineNames("Hirwa", "Junior", "santos");

let name = "Junior";