/** Visual smoke-test: scroll through the page and capture each section. */
import { chromium } from "playwright";

const base = process.env.BASE_URL ?? "http://localhost:3000";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const sectionIds = ["toys", "why", "gallery", "story", "contact", "faq"];
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));

for (const lang of ["en", "ar"]) {
  await page.goto(`${base}/${lang}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  // scroll through the whole page slowly so every ScrollTrigger fires
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 600) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(120);
  }
  for (const id of sectionIds) {
    await page.evaluate((sel) => {
      const el = document.getElementById(sel);
      if (el) el.scrollIntoView({ block: "start" });
    }, id);
    await page.waitForTimeout(700);
    await page.screenshot({ path: `/home/user/shots/${lang}-${id}.png` });
    console.log(`✔ ${lang}/${id}`);
  }
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(700);
  await page.screenshot({ path: `/home/user/shots/${lang}-bottom.png` });
}
console.log(errors.length ? `⚠ page errors: ${errors.join(" | ")}` : "✔ no page errors");
await browser.close();
