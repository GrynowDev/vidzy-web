const puppeteer = require('puppeteer');
const pti = require('puppeteer-to-istanbul')
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await Promise.all([
    page.coverage.startJSCoverage(),
    ]);

    
    await page.goto("http://127.0.0.1:5501/index.html", {waitUntil: 'networkidle2'})

    const [jsCoverage] = await Promise.all([
        page.coverage.stopJSCoverage(),
    ])

    const calculatedUsedBytes = (data) =>
    data.map(( {url, ranges, text}) => {
        let usedBytes = 0;

        ranges.forEach((range) => (usedBytes += range.end - range.start - 1));

        return {
            url,
            usedBytes,
            totalBytes: text.length
        };
    });

    fs.writeFile("./output.json", JSON.stringify(jsCoverage), () => {})
    await browser.close();
})();
