// Write your solution in this file!
const employee = { 
    name: "Jim",
    streetAddress: "123 Office Rd"
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
      ...obj,
      [key]: value,
    };
  }

const employee2 = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Pam"
);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value

    return obj;
}

const employee3 = destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "name",
    "pam"
)

function deleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj };

    delete newObj[key] ;

    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj };

    delete obj[key] ;

    return obj;
}

const mutatedEmployee = destructivelyDeleteFromEmployeeByKey(
    employee, 
    "name"
)
