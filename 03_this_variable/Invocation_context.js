// * the value of this depends on the invocation context of the function it is used in

const people = {
  firstName: "sunil",
  lastName: "Rathor",
  fullName() {
    const { firstName, lastName } = this;
    return `${firstName} ${lastName}`;
  },

  personBio() {
    console.log(this);
    //* I can call method which reside in same object using this
    const info = this.fullName();
    console.log(info);
  },
};

people.personBio();

//const printBio = people.personBio; //* iam reference to the method printBio

//printBio(); //!wrong way of calling nothng on left side

//* by call like this we will get the error like this.fullName is not a function, we should know how to call this method
//* "object.method" object = people and method = personBio
//* the value of this depends on the left of the dot
//* which object is calling in this exemple line 21 "printBio();"  there is nothing on the left side so it refer to the window object

// ! thecorrect way of calling is "people.personBio"
