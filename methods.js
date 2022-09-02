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
    },
    treatDay: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money;
    }

}
const exam = student.exam();
console.log(exam)

const reExam = student.Improve('Algebra')
console.log(reExam);

const remaining = student.treatDay(900, 100);
console.log(remaining);