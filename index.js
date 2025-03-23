const unmodifiedTestArr = [1, 2, 3, 4];
const unmodifiedTestObj = { one: 1, two: 2, three: 3, four: 4 };

function logElement(element) {
  console.log(`Element: ${element}`);
}
function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection);
    }
  } else {
    for (let key in collection) {
      callback(collection[key]);
    }
  }
  return collection;
}

myEach(unmodifiedTestArr, logElement)
myEach(unmodifiedTestObj, logElement)


// ✓ calls alert with each element passed
// ✓ calls alert properly on object values
// ✓ returns the original collection








const testArr = [1, 2, 3, 4];
const testObj = {pay: 5000, allowance: 10000}

function double(num){
    return num * 2;
}

function myMap(collection, callback){
    // Convert object values to an array if the collection is an object
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    //map over the values and apply the callback
    return values.map(callback)
}

myMap(testArr, double)
console.log(myMap(testArr, double))
myMap(testObj, double)
console.log(myMap(testObj, double))


// ✓ successfully returns a correctly populated array
//       ✓ does not modify the original array
//       ✓ successfully returns a correctly populated array from modified object values
//       ✓ does not modify the original object


const testArray = [200, 400, 500, 800]
const testObject = { one: 1, two: 2, three: 3, four: 4 };
const callback = (acc, val) => acc + (val * 3);
function myReduce(collection, callback, acc) {
let values = Object.values(collection); //convert the collection to an array
let result = acc !== undefined ? acc : values[0]; //set initial accumulator
let startIndex = acc !== undefined ? 0 : 1; //Determine starting index

for (let i = startIndex; i < values.length; i++){
  result = callback(result, values[i], collection);
}
return result;
}

console.log(myReduce(testArray, callback, 0));
console.log(myReduce(testObject, callback, 0))
//it supports both arrays and objects
//handles the presence or absence of an initial accumulator
//ensures original collection is not modified



const numbers = [2, 5, 8, 10];
function myFind(collection, callback){
  let values = Object.values(collection); //convert object to array if needed. this ensures ensures that if collection is an object, we only loop through its values

  //iterate through the collection
  //loop through vaues(which is either an array or object values)
  //apply the callback funcion to each value
  for(let i = 0; i < values.length; i++){
    if(callback(values[i])){
      return values[i]; //return the first match
    }
  } 
  return undefined; //if no match is found
}
console.log(myFind(numbers, (num) => num > 8))//output will be 10 because first number greater than 8
console.log(myFind(numbers, (num) => num > 20))//when there's no match found it will display undefined




//It returns a new array with the filtered values.
//It loops through a collection (array or object values).
const numbers1 = [6, 11, 5, 12, 17, 100, 9, 1, -8];
function myFilter(collection, callback){
  let values = Object.values(collection); //convert object values to an array. if collection is an array, values stays the same. If collection is an object, we extract only its values
  let result = []; //array to store filtered values

  for (let i = 0; i < values.length; i++){
    if(callback(values[i])) {
      result.push(values[i]); //add value if callback returns true
    }
  }
  return result;
}



function greaterThan10(num){
  return num > 10;
}


console.log(myFilter(numbers1, greaterThan10));



const numbers2 = [1,2,3,4,5]
const numbers3 = {a:1, b: 2, c:3}
function mySize(collection){
  return Object.keys(collection).length;
}

console.log(mySize(numbers2))
console.log(mySize(numbers3))


const numbers4= [1,2,3,4,5]
function myFirst(array, n){
  if (n === undefined){
    return array[0];
  }
  return array.slice(0, n)
}

console.log(myFirst(numbers4))

const numbers5 = [10,20,30,40]
function myLast(array, n){
  if(n === undefined){
    return array[array.length -1]
  }
  return array.slice(-n);
}

console.log(myLast(numbers5, 2))



const numbers6 = {a:200, b:300, c:900, d:1000}
const info = {name: "Jerome", age: 25}
function myKeys(obj){// returns an array of all the objects
  return Object.keys(obj); //get all object keys
}

console.log(myKeys(numbers6))
console.log(myKeys(info))


function myValues(obj) {
  return Object.values(obj); //get all objects values
}

console.log(myValues(info))