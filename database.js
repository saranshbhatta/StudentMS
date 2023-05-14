const formEl = document.getElementById("studentForm");
const searchEl = document.getElementById("search");
const dataTable = document.getElementById('studentTable')
const searchTable = document.getElementById('searchTable')

if (localStorage.getItem("data") != null) {
  displayStudentDetails();
} else {
  console.log("emptyyyy");
}
const students = [];
function addStudentDetails() {
  // access the input of user
  const nameEl = document.getElementById("name");
  const ageEl = document.getElementById("age");
  const gradeEl = document.getElementById("grade");

  const student = {
    name: nameEl.value,
    age: ageEl.value,
    grade: gradeEl.value,
  };
  students.push(student);
  formEl.reset();

  localStorage.setItem("data", JSON.stringify(students));
  displayStudentDetails();
}

function displayStudentDetails() {
    dataTable.classList.remove('toggle')
    searchTable.classList.add('toggle')
  const studentData = JSON.parse(localStorage.getItem("data"));
  //   console.log(studentData);
  const tableEl = document.getElementById("studentTable");
  tableEl.innerHTML = "<tr><th>Name</th><th>Age</th><th>Grade</th></tr>";

  studentData.forEach((student) => {
    // console.log(student);
    // Create a new row
    const row = document.createElement("tr");

    // Create cells for student data
    const nameCell = document.createElement("td");
    const ageCell = document.createElement("td");
    const gradeCell = document.createElement("td");

    nameCell.textContent = student.name;
    ageCell.textContent = student.age;
    gradeCell.textContent = student.grade;

    // Append cells to the row
    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(gradeCell);

    // Append the row to the table
    tableEl.appendChild(row);
  });
}

function searchByName() {
    dataTable.classList.add('toggle')
    searchTable.classList.remove('toggle')
  const searchTableEl = document.getElementById("searchTable");
  searchTableEl.innerHTML = "<tr><th>Name</th><th>Age</th><th>Grade</th></tr>";

  const studentData = JSON.parse(localStorage.getItem("data"));
  studentData.forEach((student) => {
    if (searchEl.value == student.name) {

      const row = document.createElement("tr");

      // Create cells for student data
      const nameCell = document.createElement("td");
      const ageCell = document.createElement("td");
      const gradeCell = document.createElement("td");

      nameCell.textContent = student.name;
      ageCell.textContent = student.age;
      gradeCell.textContent = student.grade;

      // Append cells to the row
      row.appendChild(nameCell);
      row.appendChild(ageCell);
      row.appendChild(gradeCell);

      // Append the row to the table
      searchTableEl.appendChild(row);
    }

    // console.log('match voooo', student);
  });
}
