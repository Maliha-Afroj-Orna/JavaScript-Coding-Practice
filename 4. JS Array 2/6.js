// Given an array of student objects, print each student’s name and marks.
// John scored 85
// Alice scored 90

const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];

for (let i = 0; i < students.length; i++) {
  console.log(`${students[i].name} scored ${students[i].marks}`);
}
