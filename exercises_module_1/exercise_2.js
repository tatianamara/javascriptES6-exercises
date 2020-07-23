//Exercise 2
/*From the following vector and using the array methods (map, reduce, filter and find):*/

const users = [
    { name: 'Diego', age: 23, company: 'Rocketseat' },
    { name: 'Gabriel', age: 15, company: 'Rocketseat' },
    { name: 'Lucas', age: 30, company: 'Facebook' },
   ];

/*2.1 Using the map
  Create a variable that contains all ages of users: [23, 15, 30]*/

const ages = users.map(item => item.age); //I used the map function plus the arrow function to reduce the syntax

console.log(ages);

/*2.2 Using the filter
  Create a variable that has only users who work at Rocketseat and over 18
  years old: [{name: 'Diego', age: 23, company: 'Rocketseat'}]*/

const rocketSeatUsers = users.filter(item => item.company.toLowerCase() === 'rocketseat' && item.age > 18); //As a good practice I used the toLowerCase function to avoid mistakes when comparing a string

console.log(rocketSeatUsers);

/*2.3 Using find
  Create a variable that looks for a user who works for the Google company: undefined*/

const googleUsers = users.find(item => item.company.toLowerCase() === 'google');

console.log(googleUsers);

/*2.4 Joining operations
  Multiply the age of all users by two and then perform a filter on users who have
  maximum 50 years:*/

const users2 = users.map(item => ({ ...item, age: item.age * 2 })).filter(item => item.age <= 50);
//I use spread in the map function to return the properties of users that I don't modify, and then apply the filter function to return only users who are 50 years old or less
console.log(users2);
