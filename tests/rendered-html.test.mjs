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
  assert.match(html, /\/legals\/impressum/);
  assert.doesNotMatch(html, /react-loading-skeleton/);
});

test("server-renders the standalone contact page", async () => {
  const response = await render("/contact");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Kontakt \| Aktay Protection/);
  assert.match(html, /Nehmen Sie Kontakt auf/);
  assert.match(html, /name="email"/);
  assert.match(html, /name="service"/);
  assert.match(html, /maps\.google\.com\/maps/);
  assert.match(html, /aktayprotection@gmail\.com/);
});
