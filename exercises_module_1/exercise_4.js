//Exercise 4
/*4.1 Simple destructuring
  From the following object:*/
const company = {
    name: 'Rocketseat',
    address: {
        city: 'Rio do Sul',
        state: 'SC',
    }
};
/*Use the destructuring to transform the properties name, city and state into variables*/

const { name, address: { city, state } } = company;

console.log(name); // Rocketseat
console.log(city); // Rio do Sul
console.log(state); // SC

/*4.2 Destructuring in parameters
  In the following function:*/

function Info(user) {
    return `${user.name} tem ${user.age} anos.`;
}
Info({ name: 'Diego', age: 23 })

/*Use the destructuring in the function parameters to search for the user's name and age
  separately and the function can only return:*/
//return `${name} tem ${age} anos.`;

function showInfo({ name, age }) {
    return `${name} tem ${age} anos.`;
}
console.log(showInfo({ name: 'Diego', age: 23 }));
