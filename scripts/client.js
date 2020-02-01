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
        //append each employee to DOM, plus a 'remove employee' button
        el.append(`<li>${employees[i].firstName} ${employees[i].lastName}; ID Number: ${employees[i].idNumber}, Job Title: ${employees[i].jobTitle}, Annual Salary: $${employees[i].annualSalary} <button class="removeEmployeeButton">Remove Employee</button></li>`);
        
        //monthlyCosts
        console.log('monthly costs total: ', monthlyCosts);
    }//end for loop

    el = $('#costOut');
    el.empty();
    el.append(`<div class=monthlyCosts> Total Monthly Costs: $${monthlyCosts} </div>`);
    if(monthlyCosts >= 20000) {
        $('.monthlyCosts').css('background-color', 'red');

    }//end if

    //removeEmployee();
    $('#infoOut').on('click', '.removeEmployeeButton',removeEmployee);
}//end displayEmployeeInfo

function removeEmployee() {
    console.log('in removeEmployee function');
    el = $(this);
    //$(`<button id="removeEmployeeButton">Remove Employee</button>`).remove(el);
    
    $(el).remove();
    
    
}

//next step: get remove employee button working