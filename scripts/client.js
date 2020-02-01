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
    let monthlyCosts = 0;
    
    //select output element
    let el = $('#infoOut');
    //empty output element
    el.empty();
    //loop through array
    for(let i = 0; i < employees.length; i++) {
        monthlyCosts += Number(employees[i].annualSalary);
        //append each item to DOM
        el.append(`<li>${employees[i].annualSalary}</li>`);
        //monthlyCosts +
        console.log('monthly costs total: ', monthlyCosts);
    }//end for loop

    if(monthlyCosts == '20000') {
        
    }//end if
}//end displayEmployeeInfo