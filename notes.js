//Using Pseudocode write 1 function that converts decimal to binary

//Using Pseudocode write a function to convert binary to decimal

function toDecimal(binary) {
  const value = [128, 64, 32, 16, 8, 4, 2, 1];
  let count = 0;
  if (binary.length === 8) {
    for (let i = 0; i <= 8; i++) {
      if (binary[i] === "1") {
        count += value[i];
      }
    }
    return count;
  }
  else {
    for (let i = 0; binary.length )
  }
}
console.log(toDecimal("1101"));
console.log(toDecimal("11011111"));

fun;
