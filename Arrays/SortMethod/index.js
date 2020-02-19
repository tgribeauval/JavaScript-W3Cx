var persons = [
  { givenName: "Michel", familyName: "Buffa", age: 51 },
  { givenName: "Pig", familyName: "Bodine", age: 20 },
  { givenName: "Pirate", familyName: "Prentice", age: 32 }
];

function compareByAge(a, b) {
  // comparison function, a and b are persons
  if (a.age < b.age)
    // compare by age
    return -1;
  if (a.age > b.age) return 1;
  return 0;
}

persons.sort(compareByAge); // this will call automatically compareByAge
// passing all persons from the array, compare
// them by age and sort the array.
