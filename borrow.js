const kodomAli = {
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
const result = kodomAli.exam();
const badamALi = {
    name: 'kaca badam',
    money: 8000
}

const result2 = kodomAli.exam.call(badamALi);

// console.log(result);
// console.log(result2);
const badaMoney = kodomAli.treatDay.call(badamALi, 400, 40)
console.log(badaMoney);

const badaMoney2 = kodomAli.treatDay.apply(badamALi, [1000, 100])
console.log(badaMoney2);