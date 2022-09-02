const student = {
    name: 'kodom Ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculas', 'algebra', 'geometry'],
    exam: function () {
        return this.name + 'is participating in an exam';
    },
    Improve: function (subject) {
        this.exam()
        return `${this.name} is takeing improvement exam on ${subject} `
    }
}
const exam = student.exam();
console.log(exam)

const reExam = student.Improve('Algebra')
console.log(reExam);