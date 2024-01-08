function sortString(str) {
    return str.split('').sort().join('');
  }
  
  function filterAnagrams(arr, target) {
    const targetSorted = sortString(target);
  
    return arr.filter(word => sortString(word) === targetSorted);
  }
  
  const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
  const target = 'enlist';
  
  const anagrams = filterAnagrams(words, target);
  console.log(anagrams); 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  function sortByMultipleCriteria(people) {
    return people.sort((person1, person2) => {

      // Compare by age

      if (person1.age !== person2.age) {
        return person1.age - person2.age;
      }
      // compare by name
      return person1.name.localeCompare(person2.name);
    });
  }
  
  const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 25 },
  ];
  
  const sortedPeople = sortByMultipleCriteria(people);
  console.log(sortedPeople);
  
////////////////////////////////////////////////////////////////////////////////
// Write a function called calculateTotalPrice that calculates the total price for each product in an array of objects representing products, where each object has a name (string), price (number), and quantity (number) property. The function should return a new array containing objects with the name and totalPrice properties, where totalPrice is the result of multiplying the price with the quantity for each product.

function calculateTotalPrice(products) {
 return products.map ((object) => { 
  return {
    name: object.name,
    totalPrice:  object.price * object.quantity
  }
  
 } )
  
}

const products = [
  { name: 'Apple', price: 1.5, quantity: 3 },
  { name: 'Banana', price: 0.75, quantity: 5 },
  { name: 'Orange', price: 1.25, quantity: 2 },
];

const totalPriceArray = calculateTotalPrice(products);
console.log(totalPriceArray);

// Output: [
//  { name: 'Apple', totalPrice: 4.5 },
//  { name: 'Banana', totalPrice: 3.75 },
//  { name: 'Orange', totalPrice: 2.5 }
// ]
  