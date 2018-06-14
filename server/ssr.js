import React from "react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";

import App from "../src/App";

module.exports = function(app) {
  app.get("/", (req, res) => {
    var content = renderToString(<App />);
    var html = renderToStaticMarkup(
      <html>
        <head />
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
          <script src={"/bundle.js"} />
        </body>
      </html>
    );
    res.end(html);
  });
};
