console.log("hello from persons.js");

const isAdult = age => (age > 18 ? true : false);

const isSenior = age => age > 65 ? "Senior" : "Junior";

export {isAdult, isSenior as default};