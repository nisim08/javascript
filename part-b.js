function caculateOderTotal(unitPrice, quantity) {
  return unitPrice * quantity;
}
let orderTotal = caculateOderTotal(4, 35);
//console.log(orderTotal);

function getLetterGrade(grade) {
  if (grade < 0 && grade > 100) {
    return "invalid grade";
  }
  if (grade >= 90 && grade <= 100) {
    return "A";
  }
  if (grade >= 80 && grade <= 89) {
    return "B";
  }
  if (grade >= 70 && grade <= 79) {
    return "C";
  }
  if (grade >= 60 && grade <= 69) {
    return "D";
  }
  if (grade >= 0 && grade <= 59) {
    return "F";
  }
}

//console.log(getLetterGrade(101));

const greet = (name) => {
  return `Hello, ${name}`;
};

const greetshort = (name) => `Hello, ${name}`;

const calculateFinalPrice = (price, discountPercent) => {
  const discount = (price * discountPercent) / 100;
  const finalPrice = price - discount;
  return finalPrice;
};

let finel = calculateFinalPrice(230, 10);
let nameh = greet("nisim");
let namehs = greetshort("itai");
//console.log(finel);
//console.log(nameh);
//console.log(namehs);

const caculatePrice = (price1, price2) => {
  let discount = Math.min(price1, price2) / 2;
  let regularprice = Math.max(price1, price2);

  return regularprice + discount;
};
const IsExpensive = (price) => (price > 500 ? true : false);
const square = (number) => number * number;
//console.log(caculatePrice(200, 100));
//console.log(IsExpensive(401));
//console.log(square(4));

const getProductSummary = (proudact) => {
  let price = proudact.price;
  let name = proudact.name;

  return `${name} - ${price} NIS`;
};
const proudact = {
  name: "Laptop",
  price: 999,
  inStock: false,
};
const getAvailability = (proudact) => (proudact.inStock ? true : false);
console.log(getProductSummary(proudact));
console.log(getAvailability(proudact));
