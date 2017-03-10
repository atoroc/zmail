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
    render() {
        return (
            <Layout>
                <Header />
                <Content>
                    <h2 style={styles.h1}>Reset your password</h2>
                    <CTAButton href={this.props.data.resetLink} buttonText={'Reset Password'} />
                    <p style={styles.paragraph}>Looks like you requested a password reset. Just follow this link to complete the process:</p>
                    <p style={styles.paragraph}>
                        <a href={this.props.data.resetLink} style={{color: styles.brandColor}}>
                            {this.props.data.resetLink}
                        </a>
                    </p>
                    <p style={styles.paragraph}>If you did not request a password reset, you can safely disregard this email.</p>
                    <p style={styles.paragraph}>Thanks, Lumi</p>
                </Content>
                <SocialLinks />
            </Layout>
        );
    }
})
