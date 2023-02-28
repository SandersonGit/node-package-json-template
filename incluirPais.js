import { countries } from "./countries.js";

// console.table(countries);

const name = porcess.argv[2]
const code = process.argv[3]

if (!name || !code) {
  console.log("digite o nome de um pais");
} else {
  const newContry = {
    name,
    code
  };
  countries.push(newContry);

  console.table(countries);
}