const data = require("./medicines.json");
const puppeteer = require("puppeteer"); // npm i puppeteer
const fs = require("fs"); // optional, to write to file

// console.log(data);
async function runInfo(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "load",
    // Remove the timeout
    timeout: 0,
  });
  //---------------------------------------------------------------------------------------------------
  const getDetails = await page.evaluate(() => {
    const allNames = document.querySelectorAll(
      ".tradeName_itemNames .item_text.english"
    );
    console.log("allNames: ", allNames);
    return Array.from(allNames).map((name) => name.innerText);
  });

  console.log("getDetails: ", getDetails);
  //---------------------------------------------------------------------------------------------------
  // returns an array of all the names → [ 'Simvacor', 'Simvastatin-Teva', 'Simovil', 'Simvaxon' ]

  await browser.close();
  return getDetails;
}

async function runAll() {
  const allMedNamesArr = [];
  for (let i = 0; i < data.length; i++) {
    const medNames = await runInfo(data[i].link);
    allMedNamesArr.push(medNames);
    console.log(`i: ${i} / ${data.length}  ${medNames}`);
    fs.appendFileSync(
      "medicinesNamesInFor.json",
      JSON.stringify({ [i]: medNames })
    );
  }
  return allMedNamesArr;
}
const allMedNamesArr = runAll();
fs.writeFileSync("medicinesNames.json", JSON.stringify(allMedNamesArr));

//  data.forEach((med) => {
//   console.log("med.link: ", med.link);
//   const medNames = awaitrunInfo(med.link);
//   allMedNamesArr.push(medNames);
// });

// await Promise.all(allMedNamesArr);
