import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString, renderToStaticMarkup } from "react-dom/server";

import App from "../src/App";

module.exports = function(app) {
  app.get("*", (req, res) => {
    const context = {};
    var content = renderToStaticMarkup(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );
    console.log(renderToString(content));
    var html = `<html>
        <head />
        <body>
          <div id="app">${content}</div>
          <script src="http://localhost:8081/dist/bundle.js"></script>
        </body>
      </html>`;
    res.end(html);
  });
};
