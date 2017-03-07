import fs from 'fs'
import inlineCss from 'inline-css'

const generateCustomTemplate = (path, html) => {
// inlineCss(html, {url: './'})
// .then((html) => {
    fs.open(path, 'w+', function(err, data) {
        if (err) {
            console.log("ERROR !! " + err)
        } else {
            fs.writeFile(path, html, function(err) {
                if(err) {
                    return console.log(err)
                }

                console.log(`Wrote ${path}`)
            })
        }
    })
// })
}

export default generateCustomTemplate
