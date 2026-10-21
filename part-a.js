const my_age = 18;
const has_Permission = true;
const is_Registration_Open = true;
const participant_Id = 24;

if (my_age >= 18) {
  console.log("eligble");
} else {
  console.log("not eligble");
}

if (participant_Id % 2 == 0) {
  console.log("even");
} else {
  console.log("ood");
}
if (is_Registration_Open == true && participant_Id == 24) {
  console.log("registered");
}

const completed = true;
let status = completed ? "done" : "in progress";
console.log("status");

const stock = 5;
let stockmassage = stock > 5 ? 0 : "out of stock";
console.log(stockmassage);

//premium
