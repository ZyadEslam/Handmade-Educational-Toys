import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page.goto("http://localhost:3000/en", { waitUntil: "networkidle" });
await page.waitForTimeout(1200);
await page.screenshot({ path: "/home/user/shots/mobile-hero.png" });
await page.evaluate(() => document.getElementById("faq")?.scrollIntoView());
await page.waitForTimeout(900);
await page.screenshot({ path: "/home/user/shots/mobile-faq.png" });
// open mobile menu
await page.evaluate(() => window.scrollTo(0,0));
await page.waitForTimeout(400);
await page.locator('button[aria-label="Menu"]').click();
await page.waitForTimeout(400);
await page.screenshot({ path: "/home/user/shots/mobile-menu.png" });
console.log("mobile done");
await browser.close();
