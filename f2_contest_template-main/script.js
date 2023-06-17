/** @format */

let employee = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const developers = employees
    .filter(employee => employee.profession === "developer")
    .map(employee => employee.name);
  
  console.log(developers);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  const developers = [];
  
  employees.forEach(employee => {
    if (employee.profession === "developer") {
      developers.push(employee.name);
    }
  });
  
  console.log(developers);
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  employees.push(newEmployee);
  
  console.log(newEmployee);
}

function removeAdmin() {
  //Write your code here, just console.log
  const updatedEmployees = employees.filter(employee => employee.profession !== "admin");
  employees = updatedEmployees;
  
  console.log(updatedEmployees);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArray = [
    { id: 4, name: "emma", age: "22", profession: "developer" },
    { id: 5, name: "alex", age: "25", profession: "designer" },
    { id: 6, name: "lucas", age: "23", profession: "manager" }
  ];
  
  const concatenatedArray = employees.concat(newArray);
  
  console.log(concatenatedArray);
}
