const puppeteer = require("puppeteer");
const fs = require("fs");
const http = require("http");
const URL = "https://www.pullandbear.com/es";

(async () => {
  // Abrimos el navegador
  const browser = await puppeteer.launch();
  // Abrimos una nueva pestaña
  const page = await browser.newPage();
  // Accedemos a la URL
  await page.goto("https://www.atrapalo.com");

  //await page.querySelector("#onetrust-accept-btn-handler").click("#onetrust-accept-btn-handler");

  await page.screenshot({ path: "./screenshots/atrapalo.jpg" });

  await page.hover(".menu-item__productTextFontSizeNoColumn__3834172512");
  await page.click(".popover-item__item__3834172512");

  setTimeout(() => {
    (async () => {
      page.screenshot({ path: "./screenshots/result.jpg" });

      const events = await page.$$eval(".card-result-container", (nodes) => {
        return nodes.map((node) => ({
          title: node.querySelector(".GATrackEvent_nombre_producto")?.innerText,
          img: node.querySelector(".cartel-img")?.src,
          type: node.querySelector(".large-loc")?.innerText,
          price: node.querySelector(".value")?.innerText,
          discount: node.querySelector(".percentage")?.innerText,
          place: node.querySelector(".GATrackEvent_ubicacion")?.innerText,
          date: node.querySelector(".event-info-container>.info")?.innerText,
          rate: node.querySelector("#opinionDescItem_4882066")?.innerText,
          media: node.querySelector(".opi-rating")?.innerText
        }));
      });

      const eventsJSON = await JSON.stringify(events);
      console.log(events);
      fs.writeFile(
        "./data.json",
        eventsJSON,
        (error) => error && console.log("ha habido un error")
      );
    })();
  }, 4000);

const PORT = 8080;
const server = http.createServer(requestHandler);

server.listenerCount(PORT, () => {
    console.log(`Server started in http://localhost:${PORT} 🚀`);
});
})();

const requestHandler = (req, res) => {
    res.setHeader("Content-type", "text/json");
    res.writeHead(200);

    const events = fs.readFileSync("./events.json", (error, events) => {
        if (error) {
          console.log("No encuentro el fichero solicitado ❌");
        } else {
          const parsedEvents = JSON.parse(events);
          return parsedEvents;
        }
      });
      if (req.url === "/") res.end(events);
}