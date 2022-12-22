const medicines = require("./medicines.json");
const medicinesDesc = require("./medicinesDescInFor.json");
const medicineAltNames = require("./medicinesNamesInFor.json");
const medicineGoodFor = require("./medicinesGOODFORInFor.json");

const fs = require("fs");

// console.log("medicines: ", medicines);
console.log("medicines Length: ", medicines.length);
// console.log("medicinesDesc: ", medicinesDesc);
console.log("medicinesDesc Length: ", medicinesDesc.length);
console.log("medicineAltNames: ", medicineAltNames);
console.log("medicineAltNames Length: ", medicineAltNames.length);

const allMeds = [...medicines];
for (let i = 0; i < allMeds.length; i++) {
  Object.assign(allMeds[i], { altNames: medicineAltNames[i][i] });
  Object.assign(allMeds[i], { goodFor: medicineGoodFor[i][i] });
  Object.assign(allMeds[i], { description: medicinesDesc[i][i] });
}

console.info("allMeds: ", allMeds);
fs.writeFileSync("./allMedicines.json", JSON.stringify(allMeds));
