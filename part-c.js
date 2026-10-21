const categories = ["Electronics", "Fasion", "Books", "Home"];
console.log(
  `first: ${categories[0]}, last: ${categories[categories.length - 1]}`,
);

console.log(categories.includes("Books"));
console.log(categories.indexOf("Books"));
console.log(categories.indexOf("Sports"));

categories.push("Sports");
console.log(categories);

let removed = categories.pop();
console.log(categories);
