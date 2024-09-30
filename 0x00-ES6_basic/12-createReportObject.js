export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList, // Set allEmployees to the provided employeesList
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length; // Return the number of keys in allEmployees
    },
  };
}
