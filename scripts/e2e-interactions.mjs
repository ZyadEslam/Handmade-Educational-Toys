/** End-to-end interaction smoke test: cart flow + language toggle. */
import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));

const pass = (name) => console.log(`✔ ${name}`);
const fail = (name, extra) => {
  console.error(`✘ ${name}${extra ? ` — ${extra}` : ""}`);
  process.exitCode = 1;
};

// 1) Add two products to the bag (scroll so each card is revealed)
await page.goto("http://localhost:3000/en", { waitUntil: "networkidle" });
await page.evaluate(() => document.getElementById("toys")?.scrollIntoView());
await page.waitForTimeout(800);

for (let i = 0; i < 6; i++) {
  await page.evaluate((n) => {
    const cards = document.querySelectorAll("article");
    cards[n]?.scrollIntoView({ block: "center" });
  }, i);
  await page.waitForTimeout(250);
}

const addButtons = page.getByRole("button", { name: "Add to bag" });
const count = await addButtons.count();
count >= 5 ? pass(`found ${count} add-to-bag buttons`) : fail("add buttons", String(count));

// click buttons inside specific cards (button label changes after click,
// so target by card container, not by button index)
await page.locator("article").nth(0).getByRole("button").click(); // Happy Farm 990
await page.locator("article").nth(1).getByRole("button").click(); // Rainbow 520
await page.waitForTimeout(300);

// badge shows 2
const badge = page.locator("header button span").filter({ hasText: "2" }).first();
(await badge.isVisible()) ? pass("cart badge = 2") : fail("badge");

// 2) Open the drawer
await page.locator('button[aria-label="Your bag"]').click();
await page.waitForTimeout(500);
const drawer = page.getByRole("dialog", { name: "Your bag" });
(await drawer.isVisible()) ? pass("cart drawer opens") : fail("drawer");

const checkout = drawer.getByRole("link", { name: "Order on WhatsApp" });
(await checkout.isVisible()) ? pass("checkout CTA visible") : fail("checkout");

const href = await checkout.getAttribute("href");
href && href.startsWith("https://wa.me/") ? pass("checkout → wa.me link") : fail("whatsapp link", href ?? "");

// total = 990 + 520 = 1,510
const totalText = (await drawer.textContent()) ?? "";
totalText.includes("1,510") ? pass("total 1,510 EGP") : fail("total", totalText.slice(-120));
await page.screenshot({ path: "/home/user/shots/e2e-en-cart.png" });

// 3) close via Escape
await page.keyboard.press("Escape");
await page.waitForTimeout(400);
(await drawer.isVisible()) ? fail("drawer still open") : pass("drawer closes on Esc");

// 4) language toggle keeps section & flips dir
await page.locator('a[aria-label*="التبديل"]').first().click();
await page.waitForURL("**/ar", { timeout: 10000 });
const dir = await page.evaluate(() => document.documentElement.dir);
dir === "rtl" ? pass("Arabic page is RTL") : fail("dir", dir);
await page.evaluate(() => document.getElementById("toys")?.scrollIntoView());
await page.waitForTimeout(700);
await page.screenshot({ path: "/home/user/shots/e2e-ar-toys.png" });

// 5) cart persisted across language (same origin storage)
await page.locator('button[aria-label="حقيبتك"]').click();
await page.waitForTimeout(400);
const arCount = await page.locator("header button span").filter({ hasText: "2" }).first().isVisible();
arCount ? pass("cart persisted (badge still 2 in AR)") : fail("persist badge");
await page.screenshot({ path: "/home/user/shots/e2e-ar-cart.png" });

console.log(errors.length ? `⚠ page errors: ${errors.join(" | ")}` : "✔ no page errors");
await browser.close();
