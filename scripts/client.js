console.log('js');
 
$(document).ready(onReady);

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
}//end addEmployeeInfo
