export default function createIteratorObject(report) {
  const employees = report.allEmployees; // Access the allEmployees property from the report object
  const employeeList = [];

  // Iterate over each department and collect all employees
  for (const department in employees) {
    employeeList.push(...employees[department]); // Use spread to add all employees of a department to the list
  }

  // Create a generator function that yields each employee
  function* employeeGenerator() {
    for (const employee of employeeList) {
      yield employee; // Yield each employee
    }
  }

  return employeeGenerator(); // Return the generator object
}
