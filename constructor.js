function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

var1 = new User("Tiago", "Lira", 36, "male");

var2 = new User("Gabriela", "Luciano", 28, "female");

console.log(var1);
console.log(var2);
console.table(var1);
console.table(var2);
