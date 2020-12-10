const array: Array<number> = [1, 2, 3];

// Map
type Transform<T, U> = (value: T, index: number, array: Array<T>) => U;
const transform: Transform<number, string> = (a) => String(a ** 2);
// Array<T>.prototype.map : (Tranform<T, U>) => Array<U>
array.map(transform); // [1, 2, 3] => ["1", "4", "9"]

// Filter
type Predicate<T> = (value: T, index: number, array: Array<T>) => boolean;
const predicate: Predicate<number> = (a) => a % 2 === 1;
// Array<T>.prototype.map : (Tranform<T>) => Array<T>
array.filter(predicate); // [1, 2, 3] => [1, 3]

// Reduce
type Executor<T, U> = (
  previousResult: U,
  value: T,
  index: number,
  array: Array<T>
) => U;
const executor: Executor<number, number> = (sum, v) => sum + v;
// Array<T>.prototype.reduce : (executor: Executor<T, U>, initialValue: U) => U
array.reduce(executor, 0); // [1, 2, 3] => ((0 + 1) + 2) + 3 = 6
array.reduce(executor); // [1, 2, 3] => (1 + 2) + 3 = 6
