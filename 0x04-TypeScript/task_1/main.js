var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
function printTeacher(firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
}
var formattedName = printTeacher("John", "Doe");
console.log(formattedName);
var StudentClass = /** @class */ (function () {
    function StudentClass(args) {
        this.firstName = args.firstName;
        this.lastName = args.lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Example usage (optional)
var student1 = new StudentClass({ firstName: 'Alice', lastName: 'Jones' });
console.log(student1.displayName()); // Output: Alice
console.log(student1.workOnHomework());
