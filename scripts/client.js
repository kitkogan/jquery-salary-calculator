console.log('js');

$(document).ready(onReady);
let employees = [];

function onReady() {
    console.log('in onReady');
    $('#submitButton').on('click', addEmployeeInfo);
}//end onReady

function addEmployeeInfo() {
    console.log('in addItem');
    //get user input and create a new item object
    let employee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNumber: $('#idNumberIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val()
    }//end employee
    console.log('adding:', employee);
    
}//end addItem