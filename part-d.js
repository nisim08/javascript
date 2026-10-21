//first
const players = [
  { id: 1, nickname: "nisim", score: 840, level: 5 },
  { id: 2, nickname: "ella", score: 124, level: 1 },
];

players.forEach((p) => {
  console.log(
    `${p.nickname} - points ${p.score} | id ${p.id} | level ${p.level}`,
  );
});

//second

const score = [100, 200, 300, 400];
const courses = ["JavaScript", "Design", "Databases"];

const updatedscore = score.map((s) => {
  return (s = s + 100);
});
const courseslength = courses.map((c) => {
  return (c = c.length);
});
const doubledScores = score.map((score) => {
  return score * 2;
});

console.log(updatedscore);
console.log(courseslength);
console.log(doubledScores);
