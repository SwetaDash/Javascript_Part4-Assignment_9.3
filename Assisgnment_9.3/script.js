var evens = [2, 4, 6, 8];
var odds = [1, 3, 5, 7];
var primes = [2, 3, 5, 7, 11];

var num = [...evens, ...odds, ...primes]; //Spread operator
console.log(num);

var primeCopy = [...primes]; //copy Primes var to primeCopy
console.log(primeCopy);

var jamesBond = {
    first : 'James',
    last : 'bond',
    country : 'United States',
    city :'New York',
    twitter : '@jamesbond'
};
var {first,last,country,city,twitter}=jamesBond; //Destructuring object
console.log(first,last,country,city,twitter);

const players = ['paul', 'andy', 'darrell', 'jim'];
const [player1, player2, player3, player4] = players; //Destructuring Array
console.log(player1, player2, player3, player4);


