export default function iterateThroughObject(reportWithIterator) {
  const employees = []; // Initialize an array to store employee names

  // Iterate through the reportWithIterator
  for (const employee of reportWithIterator) {
    employees.push(employee); // Add each employee name to the array
  }

  // Join the employee names with ' | ' separator and return the result
  return employees.join(' | ');
}
