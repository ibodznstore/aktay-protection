import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Aktay Protection home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Aktay Protection/);
  assert.match(html, /Sicherheit beginnt mit Vertrauen/);
  assert.match(html, /Objektschutz/);
  assert.match(html, /Baustellenbewachung/);
  assert.match(html, /Videoüberwachung/);
  assert.match(html, /Doormen- und Pfortendienste/);
  assert.match(html, /Nächste Leistung: Baustellenbewachung/);
  assert.match(html, /Bewerben Sie sich jetzt/);
  assert.match(html, /id="startseite"/);
  assert.match(html, /id="ueber-uns"/);
  assert.match(html, /id="leistungen"/);
  assert.match(html, /id="karriere"/);
  assert.doesNotMatch(html, /id="(?:hero|about|service|careers)"/);
  assert.match(html, /action="https:\/\/usebasin\.com\/f\/fe98cd7a463e"/);
  assert.match(html, /enctype="multipart\/form-data"/i);
  assert.match(html, /name="resume"/);
  assert.doesNotMatch(html, /Noch nicht versendet/);
  assert.match(html, /\/legals\/impressum/);
  assert.doesNotMatch(
    html,
    /<a href="\/legals\/datenschutz">Datenschutzerklärung<\/a>/,
  );
  assert.doesNotMatch(html, /ChatGPT|OpenAI/i);
  assert.doesNotMatch(html, /react-loading-skeleton/);
});

test("server-renders the standalone contact page", async () => {
  const response = await render("/contact");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Kontakt \| Aktay Protection/);
  assert.match(html, /Nehmen Sie Kontakt auf/);
  assert.match(html, /id="kontakt"/);
  assert.doesNotMatch(html, /id="contact"/);
  assert.match(html, /name="email"/);
  assert.match(html, /name="service"/);
  assert.doesNotMatch(html, /maps\.google\.com\/maps/);
  assert.match(html, /52\.41151859650407,12\.54747794570078/);
  assert.match(html, /Google Maps anzeigen/);
  assert.match(html, /Karte laden/);
  assert.match(html, /aktayprotection@gmail\.com/);
  assert.doesNotMatch(html, /ChatGPT|OpenAI/i);
});

test("server-renders the legal overview and required legal pages", async () => {
  const overviewResponse = await render("/legals");
  assert.equal(overviewResponse.status, 200);
  const overviewHtml = await overviewResponse.text();
  assert.match(overviewHtml, /Rechtliche Informationen/);
  assert.match(overviewHtml, /\/legals\/impressum/);
  assert.match(overviewHtml, /\/legals\/datenschutz/);
  assert.doesNotMatch(overviewHtml, /ChatGPT|OpenAI/i);

  const impressumResponse = await render("/legals/impressum");
  assert.equal(impressumResponse.status, 200);
  const impressumHtml = await impressumResponse.text();
  assert.match(impressumHtml, /Gewerbebehörde/);
  assert.match(impressumHtml, /§ 34a Gewerbeordnung/);
  assert.doesNotMatch(impressumHtml, /ChatGPT|OpenAI/i);

  const privacyResponse = await render("/legals/datenschutz");
  assert.equal(privacyResponse.status, 200);
  const privacyHtml = await privacyResponse.text();
  assert.match(privacyHtml, /Vercel Inc\./);
  assert.match(privacyHtml, /STRATO GmbH/);
  assert.doesNotMatch(privacyHtml, /ChatGPT|OpenAI/i);
  assert.match(privacyHtml, /Google Maps/);
  assert.match(privacyHtml, /§ 26 Abs\. 1 BDSG/);
  assert.match(privacyHtml, /Moonshot Ventures Inc\./);
  assert.match(privacyHtml, /https:\/\/usebasin\.com\/dpa/);

  const privacyAliasResponse = await render("/legals/terms-conditions");
  assert.equal(privacyAliasResponse.status, 200);
  assert.doesNotMatch(await privacyAliasResponse.text(), /ChatGPT|OpenAI/i);
});
