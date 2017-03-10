import _ from "lodash";
import Oy from "oy-vey";
import React from "react";
import emails from "./emails";
import express from "express";
import bodyParser from "body-parser";
import writeFile from "./lib/writeFile";
import generateCustomTemplate from "./lib/generateCustomTemplate";

const server = express();
server.set("port", process.env.PORT || 8887);

server.use(bodyParser.json()); // to support JSON-encoded bodies

server.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  }),
);

server.get("/:template.:type", (req, res) => {
  const Email = emails[req.params.template]

  const { query, body } = req;
  const data = Object.assign({}, query, body);

  if (Email) {
    const html = Oy.renderTemplate(
      <Email {...data} />,
      Email.options,
      templateOptions => generateCustomTemplate(templateOptions),
    );

    res.set("Cache-Control", "no-cache, no-store, must-revalidate");
    res.set("Pragma", "no-cache");
    res.set("Expires", "0");
    res.send(html);
  } else {
    res.status(404);
    res.send({error: 'Template not found'})
  }
});

server.get('/templates', (req, res) => {
  res.send(Object.keys(emails));
})

server.listen(server.get("port"), () => {
  console.log("Node server is running on port", server.get("port"));
});
