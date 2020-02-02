console.log('js');

$(document).ready(onReady);
let employees = [];

function onReady() {
    console.log('in onReady');
    $('#submitButton').on('click', addEmployeeInfo);
    displayEmployeeInfo();
    $('.removeEmployeeButton').on('click', removeEmployee)
    
}//end onReady

function addEmployeeInfo() {
    console.log('in addEmployee');
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

function calculateMonthlyCosts() {
    let monthlyCosts = 0;
    for(let i = 0; i < employees.length; i++) {
        //let employee = employees[i];
        monthlyCosts += Number(employees[i].annualSalary);
     
    }//end if
    el = $('.monthlyCostsTotal');
    el.empty();
    el.append(monthlyCosts);
    
    if(monthlyCosts >= 20000) {
        $('.monthlyCostsTotal').css('background-color', 'red');
        

    }
    console.log('monthly Cost total ', monthlyCosts);
}//end calculateMonthly

function displayEmployeeInfo() {
    console.log('in displayEmployeeInfo');
    $('.employeeRow').remove();
    //let monthlyCosts = 0;
    
    //select output element
    let el = $('#infoOut');
    
    //empty output element
    el.empty();
    //loop through array
    for(let i = 0; i < employees.length; i++) {
        let employee = employees[i];
        // monthlyCosts += Number(employees[i].annualSalary);
        $('#employeeTable').append(
            '<tr class="employeeRow"><td>' + employee.firstName + '</td><td>' + employee.lastName + '</td><td>' + employee.idNumber + '</td><td>' + employee.jobTitle + '</td><td>$' + employee.annualSalary + '</td><td><button class="removeEmployeeButton">Remove Employee</button></td></tr>');
            
        
        
        //append each employee to DOM, plus a 'remove employee' button
        //el.append(`<td>${employees[i].firstName} ${employees[i].lastName}; ID Number: ${employees[i].idNumber}, Job Title: ${employees[i].jobTitle}, Annual Salary: $${employees[i].annualSalary} <button class="removeEmployeeButton">Remove Employee</button></li>`);
        
        //monthlyCosts
        // console.log('monthly costs total: ', monthlyCosts);
    }//end for loop

    // el = $('.monthlyCostsTotal');
   
    // el.append(monthlyCosts);
    // if(monthlyCosts >= 20000) {
    //     $('.monthlyCostsTotal').css('background-color', 'red');
    //     el.empty();
    // }//end if

    //removeEmployee();
    $('.employeeRow').on('click', '.removeEmployeeButton', removeEmployee);
    calculateMonthlyCosts();
    
}//end displayEmployeeInfo

function removeEmployee() {
    console.log('in removeEmployee function');
   
    //$(`<button id="removeEmployeeButton">Remove Employee</button>`).remove(el);
    $(this).parent().parent().remove();
   
    
    
}



