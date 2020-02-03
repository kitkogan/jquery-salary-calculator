console.log('js');
 
$(document).ready(onReady);

//globals
let employees = [];

function onReady() {
   console.log('in onReady');
  $('#submitButton').on('click', addEmployeeInfo);
  displayEmployees();
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

    //empty inputs using val as a setter
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#employeetIdIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');

    console.log('adding:', newEmployee);
    employees.push(newEmployee);
    displayEmployees(); //do this every time a new employee is added
    calculateMonthlyCosts();//do this every time a new employee is added
}//end addEmployeeInfo

//calculates monthly costs and appends to the DOM each time a new employee is added
function calculateMonthlyCosts() {
    console.log('in calculateMonthlyCosts');
    //select output el
    let el = $('#monthlyCostsOut');
    //empty output el
    el.empty();
    //set beginning vars
    let annualSalarySum = 0;
    let monthlyCosts = 0;
    
    //loop through array
    for (let j = 0; j < employees.length; j++) {
        const employee = employees[j];
        annualSalarySum = annualSalarySum + Number(employee.annualSalary);
        
    }//end for loop
    //math calculations for dividing annual salary by 12 to get monthly pay for every new employee
    monthlyCosts = annualSalarySum / 12;
    monthlyCosts = Math.round(monthlyCosts * 100) / 100;
        //append monthly costs to DOM
        el.append(`<p>Monthly Costs: $${monthlyCosts}</p>`);
        //if the monthy costs reach or exceed $20000, the color of the monthly costs output line will turn red
        if (monthlyCosts >= 20000) {
            $('#monthlyCostsOut').css('background-color', 'red');
        }
        console.log('monthly costs: $', monthlyCosts);
    
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
        el.append(`<li><b><u>Employee Name:</b></u> ${employees[i].lastName}, ${employees[i].firstName}<u><b>; Employee ID Number:</b></u> ${employees[i].employeeIdNumber}<u><b> Employee Job Title:</b></u> ${employees[i].jobTitle}<u><b>  Annual Salary: $</b></u>${employees[i].annualSalary} <button class="removeEmployeeButton">Remove Employee Information</button></li>`);
    }//end for

    $('#employeeInfoOut').on('click', '.removeEmployeeButton', removeEmployee);

}//end display employees

function removeEmployee() {
    console.log('in removeEmployee');
    //display employees 
    console.log('employees: ', employees);
    //select output element
    el = $(this);
    //empty output element
    el.empty();
    //remove selected element from DOM
    el.parent().remove();
    
    
}//end removeEmployee

/// - test employee

// employees.push ( {
//     firstName: 'Kit',
//     lastName: 'Kogan',
//     employeeIdNumber: 999,
//     jobTitle: 'Software Engineer',
//     annualSalary: 65000
// });

