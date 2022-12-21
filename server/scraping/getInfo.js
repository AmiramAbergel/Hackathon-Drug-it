const puppeteer = require("puppeteer"); // npm i puppeteer
const fs = require("fs"); // optional, to write to file
let medUrl = "https://www.infomed.co.il/drugs/adalimumab/";
//-----------------------------------------------------------------------------------------------------
async function run(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
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
}

run(medUrl);
