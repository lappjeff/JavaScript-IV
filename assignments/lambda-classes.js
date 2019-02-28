// CODE here for your Lambda Classes
class Person {
    constructor(baseTraits) {
        this.name = baseTraits.name;
        this.age = baseTraits.age;
        this.location = baseTraits.location;
        this.gender = baseTraits.gender;
    }
    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person  {
    constructor(instructorTraits) {
        super(instructorTraits);
        this.specialty = instructorTraits.specialty;
        this.favLanguage = instructorTraits.favLanguage;
        this.catchPhrase = instructorTraits.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student, subject) {
        return `${student} received a perfect score on ${subject}`
    }
    gradeStudent (target) {
        target.grade = target.grade += Math.round(Math.random()) * 10 - 8;
        console.log(target.grade)
    }
}

class Student extends Person {
    constructor(studentTraits) {
        super(studentTraits)
        this.previousBackground = studentTraits.previousBackground;
        this.className = studentTraits.className;
        this.favSubjects = studentTraits.favSubjects;
        this.grade = Math.floor(Math.random() * 100) + 1
    }
    listSubjects () {
        //decided against using forEach here to get more for loop practice
        for (let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
    graduate() {
        if (this.grade > 70) {
            console.log(`${this.name} is ready to graduate with a score of ${this.grade}`)
        } else {
            console.log(`${this.name}'s score of ${this.grade} is too low to graduate now. Work harder.`)
        }
    }
}

class ProjectManager extends Instructor{
    constructor(PMTraits) {
        super(PMTraits)
        this.gradClassName = PMTraits.gradClassName;
        this.favInstructor = PMTraits.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}`
    }
}

const josh = new Instructor ({
    name: 'Josh',
    age: 'Infinite',
    location: 'Cali(?)',
    gender: 'Unicorn',
    catchPhrase: 'Small typo there'
});

const mario = new Student ({
    name: 'Mario',
    age: 'Timeless',
    location: 'Bowsers Castle',
    gender: 'Mustache',
    previousBackground: 'Full-time shell stomper',
    className: 'Plumber 101',
    favSubjects: ['Shell Stomping 101', 'Bowser 104'],
})

const luigi = new ProjectManager ({
    name: 'Luigi',
    age: 'Dimming',
    location: "Mario's shadow",
    gender: 'Brother',
    catchPhrase: 'Why does he get to wear red?',
    gradClassName: 'Slow Learners',
    favInstructor: 'Wario',
    favLanguage: 'HTML',
    specialty: 'JS'
})

console.log(josh.speak())
console.log(josh.demo('JS'))
console.log(josh.grade('Mario', 'Shell-stomping'))
//why is mario.listSubjects returning 'undefined' after it runs?
console.log(mario.listSubjects())
console.log(mario.PRAssignment('JS'))
console.log(mario.sprintChallenge('CSS'))
console.log(luigi.standUp('Conquer 101'))
console.log(luigi.debugsCode('Peach', 'Love'))

//Stretch Calls
console.log(josh.gradeStudent(mario))
