import Oy from 'oy-vey'
import React from 'react'
import writeFile from './lib/writeFile'
import HelloWorldEmail from './emails/helloWorld'
import GoodbyeWorldEmail from './emails/goodbyeWorld'
import generateCustomTemplate from './lib/generateCustomTemplate'

const emails = [
    {
        component: <HelloWorldEmail />,
        outputPath: './output/helloWorld.html',
        options: {
            title: 'Welcome to Lumi!',
            headCSS: 'body { background-color: #f7f6f5; }',
            previewText: 'Welcome to Lumi!'
        }
    },
    {
        component: <GoodbyeWorldEmail />,
        outputPath: './output/goodbyeWorld.html',
        options: {
            title: 'Goodbye Lumi!',
            headCSS: 'body { background-color: #f7f6f5; }',
            previewText: 'See you later!'
        }
    }
]

emails.forEach((email) => {
    const html = Oy.renderTemplate(email.component,
        email.options,
        (templateOptions) => generateCustomTemplate(templateOptions)
    )

    writeFile(email.outputPath, html)
    console.log("Finished!")
})
