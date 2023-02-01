let n = 7;
let angka = "1 1 9 2 8 3 7";
let splits = angka.split(" ");
let string = "";
for (let i = 0; i < n; i++) {
    string += splits[i];
  for (let k = 0; k < n - i; k++) {
    string += "0";
  }
  string += "\n";
}
console.log(string);