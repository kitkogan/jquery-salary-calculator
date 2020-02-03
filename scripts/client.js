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
    console.log('adding:', newEmployee);
    employees.push(newEmployee);
    displayEmployees(); //do this every time a new employee is added
    calculateMonthlyCosts();//do this every time a new employee is added
}//end addEmployeeInfo

//calculates monthly costs and appends to the DOM each time a new employee is added
function calculateMonthlyCosts() {
    console.log('in calculateMonthlyCosts');
    let el = $('#monthlyCostsOut');
    el.empty();
    let annualSalarySum = 0;
    let monthlyCosts = 0;
    //select output element
    //let el = $('#monthlyCostsOut');
    //empty output element
    //el.empty();
    //loop through array
    for (let j = 0; j < employees.length; j++) {
        const employee = employees[j];
        annualSalarySum = annualSalarySum + Number(employee.annualSalary);
        //beginning var for calculator
        //let monthlyCosts = 0;

        //monthlyCosts = Number(employees[j].annualSalary) / (12);
        //let totalMonthlyCosts = Number(monthlyCosts + monthlyCosts);
        //let totalSum = 0;
       // $('#annualSalaryIn').each(function() {
            //totalSum += Number($(this).val());
       // });
    }//end for loop
    monthlyCosts = annualSalarySum / 12;
    monthlyCosts = Math.round(monthlyCosts * 100) / 100;
        //let employeeMonthlySalary = Number(totalSum / 12);
       // let totalMonthlyCosts = employeeMonthlySalary + monthlyCosts;
        el.append(`<p>Monthly Costs: $${monthlyCosts}</p>`);
        if (monthlyCosts >= 20000) {
            $('#monthlyCostsOut').css('background-color', 'red');
        }
        console.log('monthly costs: $', monthlyCosts);
    
}//end calculateMonthlyCosts

//appends employee input information to DOM each time a new employee is added
function displayEmployees() {
    console.log('in display employees');
    //$('#employeeInfo').remove();
    //select output element
    let el = $('#employeeInfoOut');
    //empty output element
    el.empty();
    //loop through array
    for(let i = 0; i < employees.length; i++) {
        //append each item to DOM
        el.append(`<li><b>Employee Name:</b> ${employees[i].lastName}, ${employees[i].firstName}<b>; Employee ID Number:</b> ${employees[i].employeeIdNumber}<b> Employee Job Title:</b> ${employees[i].jobTitle}<b>  Annual Salary: $</b>${employees[i].annualSalary} <button class="removeEmployeeButton">Remove Employee Information</button></li>`);
    }//end for

    $('#employeeInfoOut').on('click', '.removeEmployeeButton', removeEmployee);

}//end display employees

function removeEmployee() {
    console.log('in removeEmployee');
}//end removeEmployee

/// - test employee

// employees.push ( {
//     firstName: 'Kit',
//     lastName: 'Kogan',
//     employeeIdNumber: 999,
//     jobTitle: 'Software Engineer',
//     annualSalary: 65000
// });

