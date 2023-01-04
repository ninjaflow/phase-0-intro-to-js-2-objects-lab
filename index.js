const employee = {

}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        ["name"]:"Sam",
        ["streetAddress"]: "11 Broadway",
        };
    }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee["streetAddress"] = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    return {...newEmployee};

const newEmployee = deleteFromEmployeeByKey(employee, key);
    delete deleteFromEmployeeByKey.name;
}


function destructivelyDeleteFromEmployeeByKey(employee, key){
    employee["name"]="Sam";
    employee["streetAddress"]= "11 Broadway";
    delete employee.name;
    return employee;
    
    }
 employee;



