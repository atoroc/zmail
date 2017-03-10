import React from 'react'
import styles from '../styles'
import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content'
import SocialLinks from '../components/social'
import CTAButton from '../components/ctaButton'
import {Table, TBody, TR, TD} from 'oy-vey';

const appStyles = {
    backgroundColor: '#f7f6f5',
    fontFamily: styles.fontFamily,
}

export default React.createClass({
    getDefaultProps() {
        return {
            firstName: 'there'
        }
    }
    render() {
        return (
            <Layout>
                <Header />
                <Content>
                    <h2 style={styles.h1}>Welcome to Lumi!</h2>
                    <CTAButton href={'http://lumi.com/account'} buttonText={'View your account'} />
                    <p style={styles.paragraph}>Hey {this.props.firstName}!</p>
                    <p style={styles.paragraph}>Thanks for joining Lumi. We're working hard to add new ways you can turn your logo and digital designs into physical things. If you have any suggestions don't hesitate to reply.</p>
                    <p style={styles.paragraph}>We're also regularly posting news and inspirational images on Instagram. We'd love to see you there <a style={{color: styles.brandColor}} href="https://instagram.com/lumi/">instagram.com/lumi</a>.</p>
                    <p style={styles.paragraph}>Thanks,<br />Shayna Brody, Customer Service</p>
                </Content>
                <SocialLinks />
            </Layout>
        );
    }
})
