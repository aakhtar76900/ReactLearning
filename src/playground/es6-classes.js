
class Person {
    
    constructor(name="Anonymus" , age=0){
        this.name = name;
        this.age= age;

    }

    getDescription() {
        return `Hi I am ${this.name}! My age is ${this.age}.`
    }
}

const me = new Person('Kimi',38);

console.log(me.getDescription());