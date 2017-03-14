import React from 'react'
import styles from '../styles'
import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content'
import SocialLinks from '../components/social'
import CTAButton from '../components/ctaButton'

const appStyles = {
    backgroundColor: '#f7f6f5',
    fontFamily: styles.fontFamily,
}

export default class ResetPassword extends React.Component {
    static defaultProps = {
        firstName: 'there',
        resetLink: 'https://www.lumi.com/password-reset'
    }

    static options = {
        title: 'Password Reset Request',
        headCSS: 'body { background-color: #f7f6f5; }',
        previewText: 'Password Reset Request'
    }

    render() {
        return (
            <Layout>
                <Header />
                <Content>
                    <h2 style={styles.h1}>Reset your password</h2>
                    <CTAButton href={this.props.resetLink} buttonText={'Reset Password'} />
                    <p style={styles.paragraph}>Looks like you requested a password reset. Just follow this link to complete the process:</p>
                    <p style={styles.paragraph}>
                        <a href={this.props.resetLink} style={{color: styles.brandColor}}>
                            {this.props.resetLink}
                        </a>
                    </p>
                    <p style={styles.paragraph}>If you did not request a password reset, you can safely disregard this email.</p>
                    <p style={styles.paragraph}>Thanks, Lumi</p>
                </Content>
                <SocialLinks />
            </Layout>
        );
    }
}
