import _ from 'lodash'
import Oy from 'oy-vey'
import React from 'react'
import emails from './emails'
import express from 'express';
import bodyParser from 'body-parser'
import writeFile from './lib/writeFile'
import generateCustomTemplate from './lib/generateCustomTemplate'

const server = express();
server.set('port', (process.env.PORT || 8887));

server.use(bodyParser.json());       // to support JSON-encoded bodies
server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

server.get('/:template.:type', (req, res) => {
  const email = _.find(emails, (email) => {
    return email.fileName == req.params.template + '.html'
  })

  const {query, body} = req
  const data = Object.assign({}, query, body)

  if (email) {
      const html = Oy.renderTemplate(<email.component data={data} />, email.options, (templateOptions) => generateCustomTemplate(templateOptions))

      res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.set('Pragma', 'no-cache');
      res.set('Expires', '0');
      res.send(html);
  }

});

server.listen(server.get('port'), () => {
  console.log('Node server is running on port', server.get('port'));
});
