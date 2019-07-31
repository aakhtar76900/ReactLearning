
const multiplier = {
    numbers : [1,2,3],
    multiplyBy : 2,
    multiplyNumbers() {
        return this.numbers.map((item) => item * this.multiplyBy);
    }

};
console.log(multiplier.multiplyNumbers());