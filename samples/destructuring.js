// object
const o = { x: 1, y: 2, z: 3 };
const x = o.x;
const w = o.y;

// assignation destructuring
const { x, y: w } = o; // declare x & w (line 3+4)
// rest operator
const { x, ...rest } = o; // x = 1, rest = { y: 2, z: 3 }
// default value
const { x = "bidule", k = "truc" } = o; // x = 1, k = "truc"

// array
const a = [1, 2, 3, 4, 5];
const x = a[0];
const y = a[1];

// assignation destructuring
const [x, y] = a; // declare x & y
// rest operator
const [x, y, ...rest] = a; // x = 1, y = 2, rest = [3, 4, 5]
const [x, , w, ...rest] = a; // x = 1, w = 3, rest = [4, 5]
// default value
const [x = 10, y = 11, , , , , k = 16] = a; // x = 1, y = 2, k = 16

// rest operator
function sum(x, ...numbers) {
  // x = 1
  // numbers = [2, 3, 4, 5]
}
sum(a);

// default value
function sum(a, b = 1) {
  return a + b;
}
sum(42); // 43
