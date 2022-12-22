const data = require("./medicines.json");
const puppeteer = require("puppeteer"); // npm i puppeteer
const fs = require("fs"); // optional, to write to file

// console.log(data);
async function runInfo(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "load",
    timeout: 0,
  });
  //---------------------------------------------------------------------------------------------------
  const getDetails = await page.evaluate(() => {
    const allGoodFor = document.querySelectorAll(".filler");
    return Array.from(allGoodFor).map((name) => name.innerText);
  });

  console.log("getDetails: ", getDetails);
  //---------------------------------------------------------------------------------------------------
  // returns an array of all the names → [ 'Simvacor', 'Simvastatin-Teva', 'Simovil', 'Simvaxon' ]

  await browser.close();
  return getDetails;
}
runInfo("https://www.infomed.co.il/drugs/butenafine/");

async function runAll() {
  const allMedGooForsArr = [];
  for (let i = 0; i < data.length; i++) {
    const medGoodFor = await runInfo(data[i].link);
    allMedGooForsArr.push(medGoodFor);
    console.log(`i: ${i} / ${data.length}  ${medGoodFor}`);
    fs.appendFileSync(
      "medicinesGOODFORInFor.json",
      JSON.stringify({ [i]: medGoodFor })
    );
  }
  return allMedGooForsArr;
}
const allMedGooForsArrOut = runAll();
fs.writeFileSync("medicinesGOODFOR.json", JSON.stringify(allMedGooForsArrOut));
const ALLGOOD = Array.from(allMedGooForsArrOut);
fs.writeFileSync("medicinesGOOD.json", JSON.stringify(ALLGOOD));
