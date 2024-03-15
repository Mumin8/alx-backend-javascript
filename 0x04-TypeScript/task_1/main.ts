interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };


console.log(teacher3);


interface Directors extends Teacher{
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string
}

function printTeacher(firstName: string, lastName: string): string{
    return `${firstName.charAt(0)}. ${lastName}`;
}

const formattedName = printTeacher("John", "Doe");
console.log(formattedName);



interface StudentConstructorArgs {
    firstName: string;
    lastName: string;
  }
  
  // Interface for the StudentClass
  interface Student {
    workOnHomework(): string;
    displayName(): string;
  }
  
  class StudentClass implements Student {
    private firstName: string;
    private lastName: string;
  
    constructor(args: StudentConstructorArgs) {
      this.firstName = args.firstName;
      this.lastName = args.lastName;
    }
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Example usage (optional)
  const student1 = new StudentClass({ firstName: 'Alice', lastName: 'Jones' });
  console.log(student1.displayName()); // Output: Alice
  console.log(student1.workOnHomework());