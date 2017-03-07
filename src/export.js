import fs from 'fs'
import App from './app'
import Oy from 'oy-vey'
import React from 'react'
import inlineCss from 'inline-css'
import generateCustomTemplate from './lib/generateCustomTemplate'

const emails = {

}

const html = Oy.renderTemplate(<App />, {
    title: 'Welcome to Lumi!',
    headCSS: 'body { background-color: #f7f6f5; }',
    previewText: 'Welcome to Lumi!'
}, (templateOptions) => generateCustomTemplate(templateOptions))

// inlineCss(html, {url: './'})
// .then((html) => {
    const path = './output/helloWorld.html'

    fs.open(path, 'w+', function(err, data) {
        if (err) {
            console.log("ERROR !! " + err)
        } else {
            fs.writeFile(path, html, function(err) {
                if(err) {
                    return console.log(err)
                }

                console.log("The file was saved!")
            })
        }
    })
// })

