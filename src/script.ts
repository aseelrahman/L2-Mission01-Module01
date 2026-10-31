// let myString: string = "Programming Hero";
// let number: number = 234324;
// let myBoolean: boolean = true;
// let mySymbol: symbol = Symbol();
// let myBigInt: bigint = 32434n;

// Type safe function
const addTwo = (a: number, b: number): number => {
  return a + b;
};

console.log(addTwo(400, 20));

// Array and Tuple and readonly modifier

// const arr: Array<string> = ["Programming", "Hero"];
const arr: string[] = ["Programming", "Hero"];
const numArr: number[] = [1, 2, 3];

const dhakaLatLong: readonly [number, number] = [23.8103, 90.4125];

// dhakaLatLong[0] = 123213;  //cannot assign
