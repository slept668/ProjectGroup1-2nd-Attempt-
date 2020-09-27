console.log("Github makes me wanna jump out the window -Brian O.");

let firstName = "Brian";
let lastName = "Oldham";
let age = 30;
let ofAge = "I am legally able to drink in the states";
let notOfAge = "It is illegal for me to drink in the states";
let just21 = "I am just barely able to drink legally in the states";

alert("My name is " + firstName + " " + lastName);

alert("I am " + age + " years old");

if(age > 21) {
    alert(ofAge);
} else if (age < 21) {
    alert(notOfAge);
} else if (age = 21) {
    alert(just21);
}
