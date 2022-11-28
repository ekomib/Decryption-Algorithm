/// Decrytption One
const num = [
  91, 322, 57, 124, 40, 406, 272, 147, 239, 285, 353, 272, 77, 110, 296, 262,
  299, 323, 255, 337, 150, 102,
];

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
let alphaNum = alpha.map((x) => String.fromCharCode(x));
alphaNum = [...alphaNum, ...Array.from(Array(10).keys()), "_"];
console.log(alphaNum[1]);

const newNum = num.map((theNew) => theNew % 37);

newNum.map((moov) => {
  console.log(alphaNum[moov]);
});

/// Decryption two

// 1. We get all the numbers and apply the split method in order to create an array called num2 which seperates each individual value by the space.
const num2 =
  "104 85 69 354 344 50 149 65 187 420 77 127 385 318 133 72 206 236 206 83 342 206 370".split(
    " "
  );

// 2. We create an empty array called alpha2 with a length of 26. We then proceed to map each element with the JavaScript character code for the alphabets a to z. The map method produces a new array that contains the numeric character code of JavaScript alphabets. We start the mapping with a value of 65 and increment the corresponding values by one.
const alpha2 = Array.from(Array(26)).map((e, i) => i + 65);

// 3. We create an unconstant variable using the let keyword. In this variable, we use the map array method which replaces all the character codes in the alpha2 array with their corresponding alphabet values.
let alphaNum2 = alpha2.map((x) => String.fromCharCode(x));

// 4. Here, We modify the alphaNum2 variable. We assign the first index a value of null since the array is expected to start with an index of 1. We also destructure the alphaNum2 array, we create another array inside the modified array with index values of 0 to 9 and also destructure the array. We also add to the modified array an underscore value at the end.
alphaNum2 = [null, ...alphaNum2, ...Array.from(Array(10).keys()), "_"];

// 5. We create a function to calculate to calculate the modular inverse
function modInverse(a, m) {
  for (let x = 1; x < m; x++) if (((a % m) * (x % m)) % m == 1) return x;
}

// 6 . We loop through the num2 array which contains all the numbers provided for decryption. We pass each of these numbers into the modular inverse calculation function to produce a new array that converts all the numbers in the num2 array to results of the modular inverse calculation.
const newNum2 = num2.map((theNew) => {
  return modInverse(theNew, 41);
});

//6. We loop through the newNum2 array which holds all the modular inverse results. We pass the alphaNum2 array in each instance of the loop where each corresponding value of the newNum2 array is passed in as the index. We produce an array with a constant variable called tam that holds the decrypted values.
const tam = newNum2.map((moov) => {
  return alphaNum2[moov];
});

// 7. We use the join array method to join all the elements in the tam array to display the encrypted value in the terminal.
console.log(tam.join(""));
