import React from "react";

import { renderToString } from "react-dom/server";
import { createServer as createViteServer } from "vite";

const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: "custom",
});

export const preRenderApp = async (html: string, path: string) => {
  const { default: App } = await vite.ssrLoadModule("@/App");

  const reactHtml = renderToString(React.createElement(App, { ssrPath: path }));

  // console.log("reactHTML", reactHtml);

  const finalHtml = html.replace(
    '<div id="root"></div>',
    `<div id="root">${reactHtml}</div>`,
  );

  return finalHtml;
};
