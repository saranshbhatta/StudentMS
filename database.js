const formEl = document.getElementById("studentForm");
const searchEl = document.getElementById("search");
const dataTable = document.getElementById("studentTable");
const searchTable = document.getElementById("searchTable");
const delBtnEl = document.getElementsByClassName("del_btn");

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
  dataTable.classList.remove("toggle");
  searchTable.classList.add("toggle");
  const studentData = JSON.parse(localStorage.getItem("data"));
  //   console.log(studentData);
  const tableEl = document.getElementById("studentTable");
  tableEl.innerHTML = "<tr><th>Name</th><th>Age</th><th>Grade</th></tr>";

  studentData.forEach((student) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    const ageCell = document.createElement("td");
    const gradeCell = document.createElement("td");
    const delBtn = document.createElement("button");
    delBtn.className = "del_btn";

    nameCell.textContent = student.name;
    ageCell.textContent = student.age;
    gradeCell.textContent = student.grade;
    delBtn.textContent = `del`;

    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(gradeCell);
    row.appendChild(delBtn);

    tableEl.appendChild(row);
  });
}

function searchByName() {
  dataTable.classList.add("toggle");
  searchTable.classList.remove("toggle");
  const searchTableEl = document.getElementById("searchTable");
  searchTableEl.innerHTML = "<tr><th>Name</th><th>Age</th><th>Grade</th></tr>";

  const studentData = JSON.parse(localStorage.getItem("data"));
  studentData.forEach((student) => {
    if (searchEl.value == student.name) {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const ageCell = document.createElement("td");
      const gradeCell = document.createElement("td");

      nameCell.textContent = student.name;
      ageCell.textContent = student.age;
      gradeCell.textContent = student.grade;

      row.appendChild(nameCell);
      row.appendChild(ageCell);
      row.appendChild(gradeCell);

      searchTableEl.appendChild(row);

      searchEl.value=""
    }
  });
}

// console.log(Array.from(delBtnEl));
// console.log(arr[1]);

let arr = Array.from(delBtnEl);
arr.forEach((button) => {
  // console.log(newArray);
  const studentData = JSON.parse(localStorage.getItem("data"))
  // console.log(studentData);
  const newArray = [...studentData]
  // console.log(studentData);
  // console.log(typeof(Array.from(studentData)));
  button.addEventListener("click", () => {
    // console.log(button.parentElement);
    button.parentElement.remove();    
    let index = arr.indexOf(button);
    newArray.splice(index,1)
    console.log(newArray);
    localStorage.setItem("data", JSON.stringify(newArray));
  });
  // return studentData
});


