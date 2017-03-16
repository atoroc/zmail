import React from 'react'
import styles from '../styles'
import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content'
import SocialLinks from '../components/social'
import CTAButton from '../components/ctaButton'

export default class OrderCancellation extends React.Component {
    static defaultProps = {
        orderNumber: '13579',
        firstName: 'beloved Lumi customer',
        reason: 'nothing',
        status: 'nothing',
        reasons: {
            customer: ' at your request.',
            inventory: ' because we did not have enough stock to fulfill your order.',
            fraud: ' because we suspect it is fraudulent.',
            other: ' due to unforseen circumstances.',
            nothing: '.'
        },
        statusResults: {
            voided: ' Your payment has been voided.',
            credited: ' Your payment has been refunded.',
            nothing: ''
        }
    }

    static options = {
        title: 'Your order has been cancelled.',
        headCSS: styles.headCSS,
        previewText: 'Your order has been cancelled.'
    }

    render() {
        return (
            <Layout>
                <Header />
                <Content>
                    <h2 style={styles.h1}>Order #{this.props.orderNumber} has been cancelled</h2>

                    <p style={styles.paragraph}>Dear {this.props.firstName},</p>

                    <p style={styles.paragraph}>Your order #{this.props.orderNumber} was cancelled

                    {this.props.reasons[this.props.reason]}

                    {this.props.statusResults[this.props.status]}

                    </p>

                    <p style={styles.paragraph}>Please reply to this email if you have any questions or concerns.</p>


                    <p style={styles.paragraph}>Thanks,</p>
                    <p style={styles.paragraph}>The Lumi Team</p>
                </Content>
                <SocialLinks />
            </Layout>
        );
    }
}
