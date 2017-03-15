# Lumi Email

## Setup / Install

To get started, clone the repo and install its dependencies:

```bash
git clone https://github.com/lumihq/lumi-email.git

npm install
```

## Creating New Emails

Lumi Email uses [Oy](https://github.com/revivek/oy), which provides some components to make it easier to build emails. You can use the built-in table components from Oy to create tables which are validated against email best practices. It also handles transclusion of the output into a base template.

To create a new email, simply create a new React component inside a separate file. Give it a descriptive name like `welcomeEmail.js` and place it in `src/emails`. You can set any default `propTypes` which should be present, along with setting any `propType` validation. You may also specify options for Oy inside the static `options` property.

```js
// welcomeEmail.js
import React from 'react'
import styles from '../styles'
import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content'
import Footer from '../components/footer'

export default class WelcomeUser extends React.Component {
    static propTypes = {
        firstName: React.PropTypes.string.isRequired
    }

    static options = {
        title: 'Welcome to Lumi!',
        headCSS: 'body { background-color: #f7f6f5; }',
        previewText: 'Welcome to Lumi!'
    }
    
    render() {
        return (
            <Layout>
                <Header/>
                <Content>
                    {this.props.firstName}
                </Content>
                <Footer/>
            </Layout>
        );
    }
})
```

> Note: if you need a layout which is different than the one provided in the `Layout` component, you can opt to make your own.

## Registering a New Email For Compilation

To register a new email for compilation, place it inside of `src/emails.js`. The name you choose here will be the endpoint for the email. For instance, if you choose `WelcomeEmail`, the route for the html version of the email will be at `/WelcomeEmail.html`.

```js
import WelcomeEmail from './emails/welcomeEmail'

export default {
    WelcomeEmail,
}
```

## Making Requests to Lumi Email

Data for the email comes from two sources. If the request is JSON (`Content-Type: application/json`), the props of the component will be set using the body of the request. Likewise, if the request is a simple `POST` request, the encoded form data will be used.

```js
var config = {
    headers: {'Content-Type': 'application/json; charset=utf-8'},
    method: 'POST',
    body: JSON.stringify(data)
}

return fetch('http://localhost:8887/WelcomeEmail.html', config)
    .then(function(response) {
        return response.text()
    })
    .then(function (html) {
        // Send the email using `html`
    })
    .catch(function (error) {
        console.log(error);
    });


```

## Development Server

Lumi Email comes with a development server. You can use a REST client like [Postman](https://www.getpostman.com/) or [Insomnia](https://insomnia.rest/) to test your emails.

## Compiling For Production

To compile Lumi Email for production, run `build` from the command line:

```bash
npm run build
```

## Production Server

To run the production version of Lumi Email, run `serve` from the command line:

```bash
npm run serve
```
