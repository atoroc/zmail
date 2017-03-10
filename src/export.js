import _ from 'lodash'
import Oy from 'oy-vey'
import React from 'react'
import emails from './emails'
import express from 'express';
import bodyParser from 'body-parser'
import writeFile from './lib/writeFile'
import generateCustomTemplate from './lib/generateCustomTemplate'

emails.forEach((email) => {
    const html = Oy.renderTemplate(<email.component />, email.options, (templateOptions) => generateCustomTemplate(templateOptions))
    writeFile(email.fileName, html)
    console.log("Finished!")
})
