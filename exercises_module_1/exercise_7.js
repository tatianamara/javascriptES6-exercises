//Exercise 7
//Use Object Short Syntax on the following object:
const name = 'Diego';
const age = 23;
const user = {
    name: name,
    age: age,
    city: 'Rio do Sul',
};

const newUser = { //using the Object Short Syntax
    name,
    age,
    city: 'Rio do Sul',
};
console.log(newUser);
