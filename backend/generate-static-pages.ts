import fs from "node:fs";
import path from "path";

import { preRenderApp } from "./pre-render";

const dist = path.join(process.cwd(), "./dist");

export const generateStaticPages = async () => {
  console.log("Generating static pages");
  const html = fs.readFileSync(path.join(dist, "index.html")).toString();

  const indexHtml = await preRenderApp(html, "/");
  const loginHtml = await preRenderApp(html, "/login");
  const settingsHtml = await preRenderApp(html, "/settings");

  fs.writeFileSync(path.join(dist, "index.html"), indexHtml);
  fs.writeFileSync(path.join(dist, "login.html"), loginHtml);
  fs.writeFileSync(path.join(dist, "settings.html"), settingsHtml);
};

generateStaticPages().then(() => {
  console.log("Static pages generated");
  process.exit(0);
});
