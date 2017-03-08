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
                    <h2 style={styles.h1}>Order #{'{{ order.orderNumber }}'} has been cancelled</h2>

                    {'{% if user.firstName %}'}
                    <p style={styles.paragraph}>Dear {'{{ user.firstName }}'},</p>
                    {'{% else %}'}{'{% endif %}'}

                    <p style={styles.paragraph}>Your order {'#{{ order.orderNumber }}'} was cancelled {'{% case order.cancelReason %}'}{'{% when "customer" %}'}at your request.{'{% when "inventory" %}'}because we did not have enough stock to fulfill your order.{'{% when "fraud" %}'}because we suspect it is fraudulent.{'{% when "other" %}'}due to unforseen circumstances.{'{% endcase %}'}{'{% if order.status == "voided" %}'} Your payment has been voided.{'{% elif order.status == "credited" %}'} Your payment has been refunded.{'{% endif %}'}</p>

                    <p style={styles.paragraph}>Please reply to this email if you have any questions or concerns.</p>


                    <p style={styles.paragraph}>Thanks,</p>
                    <p style={styles.paragraph}>The Lumi Team</p>
                </Content>
                <SocialLinks />
            </Layout>
        );
    }
})
