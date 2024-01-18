const bankSBI = {
  bankName: "SBI",
  branchName: "Ravet",
  ifscCode: "SBI0000367",
  micrCode: 411229057,
};
console.log("================== Step 1 ====================");
console.log(bankSBI);

console.log("================== Step 2 ====================");
const bankLocation = {
  street: "Ravet road",
  city: "Pune",
  pin: 412101,
};
console.log(bankLocation);

console.log("================== Step 3 ====================");
console.log("Cloned Object with bank details and bank location:");
const clonedBankDetails = Object.assign({}, bankSBI, bankLocation);
console.log(JSON.stringify(clonedBankDetails));

console.log("================== Step 4 ====================");
const rateOfInterest = {
  homeLoanInterest: 8.4,
  personalLoan: 10.07,
  dueInterest: 3.5,
};
console.log(rateOfInterest);

console.log("================== Step 5 ====================");
const sbiDetails = Object.assign({}, bankSBI, bankLocation, rateOfInterest);
console.log("All SBI details is:", JSON.stringify(sbiDetails));

console.log("================== Step 6 ====================");
console.log("Traversing of merged object:");
for (const key in sbiDetails) {
  if (Object.hasOwnProperty.call(sbiDetails, key)) {
    const element = sbiDetails[key];
    console.log(`Key=> ${key}, Values=>${element}`);
  }
}
