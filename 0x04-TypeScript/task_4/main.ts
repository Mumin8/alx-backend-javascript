// Constants for subjects
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Teacher object
export const cTeacher: Subjects.Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10
};

// Setting cTeacher as the teacher for Cpp, Java, and React subjects
cpp.setTeacher(cTeacher);
java.setTeacher(cTeacher);
react.setTeacher(cTeacher);

// Logging and calling methods for each subject
console.log("Cpp:");
console.log("C++,", cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java:");
console.log("Java,", java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React:");
console.log("React,", react.getRequirements());
console.log(react.getAvailableTeacher());
