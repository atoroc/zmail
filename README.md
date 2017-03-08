# Lumi Email

## Setup / Install

To get started, clone the repo and install its dependencies:

```bash
git clone https://github.com/lumihq/lumi-email.git

npm install
```

## Creating New Emails

Lumi Email uses [Oy](https://github.com/revivek/oy), which provides some components to make it easier to build emails. You can use the built-in table components from Oy to create tables which are validated against email best practices. It also handles transclusion of the output into a base template.

To create a new email, simply create a new React component inside a separate file. Give it a descriptive name like `welcomeEmail.js` and place it in `src/emails`.

```js
// welcomeEmail.js
import React from 'react'
import styles from '../styles'
import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content'
import Footer from '../components/footer'

const {Table, TBody, TR, TD} from 'oy-vey'

const appStyles = {
    backgroundColor: '#f7f6f5',
    fontFamily: styles.fontFamily,
}

export default React.createClass({
    render() {
        return (
            <Layout>
                <Header/>
                <Content>
                    Your Content Here!
                </Content>
                <Footer/>
            </Layout>
        );
    }
})
```

> Note: if you need a layout which is different than the one provided in the `Layout` component, you can opt to make your own.

## Registering a New Email For Compilation

To register a new email for compilation, place it inside of the `emails` array in `src/export.js`. You can also set extra parameters for the email, like `title`, `previewText`, and any extra CSS (like media queries) you would like included in `headCSS`:

```js
//...

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
    //...
]

//...
```

## Compiling Templates

To compile all of the templates, run `start` from the command line:

```bash
npm run start
```

This will output each template into the `output` folder.
