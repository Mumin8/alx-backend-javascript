namespace Subjects {
    export class Java extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Java";
        }

        getAvailableTeacher(): string {
            if (this.teacher) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return "No available teacher";
        }
    }
}