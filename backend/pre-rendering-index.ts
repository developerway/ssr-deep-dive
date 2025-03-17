import * as fs from "node:fs";
import path from "path";

import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";

const app = new Hono();

const dist = path.join(process.cwd(), "./dist");
app.use("/static/*", serveStatic({ root: dist }));

const getTitleFromPath = (pathname: string) => {
  let title = "Study project";

  if (pathname.startsWith("/settings")) {
    title = "Study project: Settings";
  } else if (pathname === "/login") {
    title = "Study project: Login";
  }

  return title;
};

app.get("/*", async (c) => {
  const html = fs.readFileSync(path.join(dist, "index.html")).toString();
  const pathname = c.req.path;

  const title = getTitleFromPath(pathname);

  const modifiedHTML = html.replace("{{title}}", title);

  return c.html(modifiedHTML);
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
