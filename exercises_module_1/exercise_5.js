//Exercise 5
//Using the rest / spread operator (...) perform the following operations:

/*5.1 Rest
From the array: const arr = [1, 2, 3, 4, 5, 6], define a variable x that receives the first
position of the vector and another variable y that receives all the rest of the data.*/

const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

//Create a function that takes numerous parameters and returns the sum of them all:

function sum(...elements) {
    return elements.reduce((total, next) => total + next);
}

console.log(sum(1, 2, 3, 4, 5, 6)); // 21
console.log(sum(1, 2)); // 3

/*5.2 Spread
  From the object and using the spread operator:*/
const user = {
    name: 'Diego',
    age: 23,
    address: {
        city: 'Rio do Sul',
        state: 'SC',
        country: 'Brasil',
    }
};
/*Create a user2 variable that contains all user data but named Gabriel.
  Create a user3 variable that contains all user data but with city Lontras.*/

var user2 = { ...user, name: 'Gabriel' };
var user3 = { ...user, address: { ...user.address, city: 'Lontras' } };

console.log(user2);
console.log(user3);
