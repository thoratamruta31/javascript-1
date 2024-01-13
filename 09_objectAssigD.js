let professor1 = {
  name: "S.B.Patil",
  age: 43,
  designation: "Head of Department",
  subject: "zoology",
  address: "Rajgurunagar",
};

let professor = {
  name: "S.B.Patil",
  age: 43,
  designation: "Head of Department",
  subject: "zoology",
  address: "Rajgurunagar",
  degrees: {
    engineering: "CSC",
    PHD: "Adv computing",
    LLB: "Human Rights & International Law",
    Msc: "Zoology",
  },
  certificates: [
    "Hacker rank participation",
    "Certificate  in IFE course",
    "Certificate in Adv programming",
  ],
};

console.log("=========== Step 1 =============");
console.log(professor1);

console.log("=========== Step 2 =============");
console.log(professor.degrees);

console.log("=========== Step 3 =============");
console.table(professor.certificates);

console.log("=========== Step 4 =============");
professor.totalExp = "14 years";
// console.log(`Added New property Total Experience is: ${professor.totalExp}`);
console.log(JSON.stringify(professor));

console.log("=========== Step 5 =============");
console.log(`Original object:${professor.address}`);
professor.address = "Pune";
console.log(`Modified address by pune: ${professor.address}`);

console.log("=========== Step 6 =============");
professor.certificates.splice(2, 0, "Oracle  certified");
console.log(
  "Updated Certificates for oracle certified: ",
  professor.certificates
);

console.log("=========== Step 7 =============");
let arrayLength = professor.certificates.length;
console.log(
  "Last element of Certicates array is:",
  professor.certificates[arrayLength - 1]
);

console.log("=========== Step 8 =============");
console.log(JSON.stringify(professor));

console.log(
  "=========== Step 9 (traversing array using for of loop) ============="
);
for (const element of professor.certificates) {
  console.log(element);
}
