const movie = {
  id: 41,
  title: "Orbit",
  genre: "Sci-Fi",
  rating: 8.4,
};

const { title, genre, rating } = movie;

const recommendedMovies = ["Orbit", "Ocean", "Skyline"];
const [firstMovie, secondMovie] = recommendedMovies;
console.log(firstMovie, secondMovie);

const user = {
  id: 7,
  UserName: "Dana Levi",
  email: "dana@example.com",
  isActive: true,
};

const formatUser = ({ UserName, email }) => {
  return UserName + "- " + email;
};
console.log(formatUser(user));

const getUserStatus = ({ UserName, isActive }) => {
  if (isActive === true) return UserName + " Active";
  else return UserName + " Not Active";
};
console.log(getUserStatus(user));

const player = {
  id: 1,
  nickname: "Noni",
  score: 1200,
  level: 8,
};

const comments = [
  { id: 1, user: "Noa", text: "Great game!", likes: 12 },
  { id: 2, user: "Dan", text: "Well played", likes: 7 },
];

const newComment = {
  id: 3,
  user: "Maya",
  text: "Amazing score!",
  likes: 0,
};

const player2 = { ...player, score: 1300 };
const newC = { ...newComment };
const commentsAfterAdd = [...comments, newC];
console.log(comments);
console.log(newComment);
console.log(commentsAfterAdd);

const sameReference = player;
const copiedPlayer = { ...player };

const tasks = [
  { id: 1, title: "Write tests", completed: false, priority: "high" },
  { id: 2, title: "Update profile", completed: true, priority: "low" },
  { id: 3, title: "Fix login", completed: false, priority: "high" },
];

const removeTaskById = (tasks, id) => {
  const removedTasks = tasks.filter((t) => t.id !== id);
  return removedTasks;
};
const tasksAfterDeleted = removeTaskById(tasks, 2);
console.log(tasksAfterDeleted);
console.log(tasks);
