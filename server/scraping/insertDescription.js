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
  const getDescription = await page.evaluate(() => {
    const allNames = document.querySelector(
      ".centeredContent .description"
    ).nextElementSibling;
    const innerHTML = allNames.innerText;
    return innerHTML;
  });
  // fs.writeFileSync("description.json", JSON.stringify(getDescription));
  console.log("getDescription: ", getDescription);
  //---------------------------------------------------------------------------------------------------
  // returns an array of all the names → [ 'Simvacor', 'Simvastatin-Teva', 'Simovil', 'Simvaxon' ]

  await browser.close();
  return getDescription;
}

async function runAll() {
  const allMedDescArr = [];
  for (let i = 0; i < data.length; i++) {
    const medDesc = await runInfo(data[i].link);
    allMedDescArr.push(medDesc);
    console.log(`i = ${i} of ${data.length}`);
    fs.appendFileSync(
      "medicinesDescInFor.json",
      JSON.stringify({ [i]: medDesc })
    );
  }
  return allMedDescArr;
}
const allMedNamesArr = runAll();
fs.writeFileSync("medicinesDescriptions.json", JSON.stringify(allMedNamesArr));

//  data.forEach((med) => {
//   console.log("med.link: ", med.link);
//   const medNames = awaitrunInfo(med.link);
//   allMedNamesArr.push(medNames);
// });

// await Promise.all(allMedNamesArr);
