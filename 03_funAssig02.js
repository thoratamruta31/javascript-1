console.log("============ Step 1 ====================");
function bankDetails(bankName, accountNum, location, pinCode) {
  console.log(
    "Bank Name =",
    bankName,
    ", Account No =",
    accountNum,
    ", Location =",
    location,
    ", Pin Code =",
    pinCode
  );
}
bankDetails();
console.log("============ Step 2 ====================");
bankDetails("CITI Bank", 3456782345, "Pune", 431202);
bankDetails("Axis BAnk", 78567872345, "Mumbai", 441202);
bankDetails("HDFC Bank", 8956782345, "Pune", 631202, "open");
