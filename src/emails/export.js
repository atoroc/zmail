import React from 'react'
import styles from '../styles'
import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content'
import SocialLinks from '../components/social'

const appStyles = {
    backgroundColor: '#f7f6f5',
    fontFamily: styles.fontFamily,
}

export default class ResetPassword extends React.Component {
    static options = {
        title: 'Your export is ready',
        headCSS: styles.headCSS,
        previewText: 'Your export is ready'
    }

    static propTypes = { }

    render() {
        return (
            <Layout>
                <Header />
                <Content>
                    <p style={{...styles.paragraph, ...{textAlign: 'center'}}}>Attached is the export you requested.</p>
                </Content>
                <SocialLinks />
            </Layout>
        )
    }
}
