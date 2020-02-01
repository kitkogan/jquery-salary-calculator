console.log('js');

$(document).ready(onReady);
let employees = [];

function onReady() {
    console.log('in onReady');
    $('#submitButton').on('click', addEmployeeInfo);
}//end onReady

function addEmployeeInfo() {
    console.log('in addItem');
    //get user input and create a new employee object
    let employee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNumber: $('#idNumberIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val()
    }//end employee
    console.log('adding:', employee);
    //push employee object to emplyees array
    employees.push(employee);
    //empty input fields 
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
    //calls the displayEmployeesInfo function
    displayEmployeeInfo();
}//end addItem

function displayEmployeeInfo() {
    console.log('in displayEmployeeInfo');
    let monthlyCosts = 0
    monthlyCosts += $(employee[i].annualSalary);
    //select output element
    let el = $('#infoOut');
    //empty output element
    el.empty();
    //loop through array
    for(let i = 0; i < employees.length; i++) {
        
        //append each item to DOM
        el.append(`<li>${employees[i].annualSalary}</li>`);
        //monthlyCosts +
        console.log('monthlyCosts', monthlyCosts);
    }//end for loop
}//end displayEmployeeInfo