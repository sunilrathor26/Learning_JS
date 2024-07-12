// * this is a keyword , it is the reference to the current execution scope and it will give an object back //
// * the value of this depends on the invocation context of the function it is used in

//* reference to global scope//
function sayHi() {
  console.log("hi");
  console.log(this);
}

sayHi();

//* example one ///////////////////////////////////////////////////

const person = {
  firstName: "sunil",
  lastName: "kumar",
  function() {
    const { firstName, lastName } = this; //* destucturing this element, this referce to the object in which it live
    console.log(`${firstName} ${lastName}`);
  },
};

person.function();

//* example two//////////////////////////////////////////////////

const people = {
  firstName: "sunil",
  lastName: "Rathor",
  fullName() {
    const { firstName, lastName } = this;
    return `${firstName} ${lastName}`;
  },

  personBio() {
    //* I can call method which reside in same object using this
    const info = this.fullName();
    console.log(info);
  },
};

people.personBio();
