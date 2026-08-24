import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function source(path) {
  return readFile(new URL(`../${path}`, import.meta.url), "utf8");
}

test("the home page keeps its German section links and Basin form", async () => {
  const [header, hero, about, services, careers, footer] = await Promise.all([
    source("components/Header.jsx"),
    source("components/Hero.jsx"),
    source("components/About.jsx"),
    source("components/Services.jsx"),
    source("components/Careers.jsx"),
    source("components/Footer.jsx"),
  ]);
  const combined = [header, hero, about, services, careers, footer].join("\n");

  assert.match(combined, /#startseite/);
  assert.match(combined, /#ueber-uns/);
  assert.match(combined, /#leistungen/);
  assert.match(combined, /id="karriere"/);
  assert.match(careers, /https:\/\/usebasin\.com\/f\/fe98cd7a463e/);
  assert.match(careers, /multipart\/form-data/);
  assert.doesNotMatch(
    footer,
    /<a href="\/legals\/datenschutz">Datenschutzerklärung<\/a>/,
  );
});

test("the contact and legal pages contain the required production details", async () => {
  const [contact, map, privacy, impressum] = await Promise.all([
    source("app/contact/page.js"),
    source("components/ConsentMap.jsx"),
    source("app/legals/datenschutz/page.js"),
    source("app/legals/impressum/page.js"),
  ]);
  assert.match(contact, /id="kontakt"/);
  assert.match(map, /52\.41151859650407/);
  assert.match(privacy, /Vercel Inc\./);
  assert.match(privacy, /STRATO GmbH/);
  assert.match(privacy, /Moonshot Ventures Inc\./);
  assert.match(impressum, /§ 34a Gewerbeordnung/);
});
