console.log('js');
 
$(document).ready(onReady);

//globals
let employees = [];

function onReady() {
   console.log('in onReady');
  $('#submitButton').on('click', addEmployeeInfo)
}//end onReady

function addEmployeeInfo() {
    console.log('in addEmployeeInfo');
    //get user input and create new employee object
    let newEmployee = {
        firstName: $('#firstNameIn').val(), 
        lastName: $('#lastNameIn').val(),
        employeeIdNumber: $('#employeeIdIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val()
    }//end newEmployee
    console.log('adding:', newEmployee);
    employees.push(newEmployee);
    displayEmployees(); //do this every time a new employee is added
    calculateMonthlyCosts();//do this every time a new employee is added
}//end addEmployeeInfo

//calculates monthly costs and appends to the DOM each time a new employee is added
function calculateMonthlyCosts() {
    console.log('in calculateMonthlyCosts');
}//end calculateMonthlyCosts

//appends employee input information to DOM each time a new employee is added
function displayEmployees() {
    console.log('in display employees');
    //select output element
    let el = $('#employeeInfoOut');
    //empty output element
    el.empty();
    //loop through array
    for(let i = 0; i < employees.length; i++) {
        //append each item to DOM
        el.append(`<li><b>Employee Name:</b> ${employees[i].lastName}, ${employees[i].firstName}<b>; Employee ID Number:</b> ${employees[i].employeeIdNumber}<b> Employee Job Title:</b> ${employees[i].jobTitle}<b>  Annual Salary: $</b>${employees[i].annualSalary}</li>`);
    }//end for
}//end display employees
