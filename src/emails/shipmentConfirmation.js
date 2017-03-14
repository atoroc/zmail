import React from 'react'
import styles from '../styles'
import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content'
import SocialLinks from '../components/social'
import CTAButton from '../components/ctaButton'

export default class ShipmentConfirmation extends React.Component {
    static propTypes = {
        orderNumber: React.PropTypes.string.isRequired,
        carrier: React.PropTypes.string.isRequired,
        trackingUrl: React.PropTypes.string.isRequired,
        trackingNumbers: React.PropTypes.array.isRequired,
        destinationCountry: React.PropTypes.string.isRequired,
        estimatedDeliveryDate: React.PropTypes.string.isRequired,
        orderItems: React.PropTypes.array.isRequired,
    }

    static options = {
        title: 'Your order has shipped!',
        headCSS: 'body { background-color: #f7f6f5; }',
        previewText: 'Your order has shipped!'
    }

    renderCTAButton() {
        if (this.props.trackingUrl) {
            return (
                <CTAButton href={this.props.trackingUrl} buttonText={'Track your package'} />
            )
        }
    }

    renderTrackingNumbers() {
        if (this.props.carrier && this.props.trackingNumbers) {
            return (
                <div style={{marginBottom: '30px'}}>
                    <p style={styles.paragraph}>
                        They are being shipped via {this.props.carrier} with tracking number(s):
                    </p>

                    <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                        {
                            this.props.trackingNumbers.map((number) => {
                                return (
                                    <li key={number.trackingNumber}>
                                        <a href={number.trackingUrl} style={{'color': styles.brandColor}}>
                                            {number.trackingNumber}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        }
    }

    renderCustomsWarning() {
        if (this.props.destinationCountry != 'United States') {
            return (
                <p style={{...styles.paragraph, ...{marginTop: '30px', marginBottom: '30px'}}}>
                    <b>Please note:</b> once your package arrives in {this.props.country} it may take 10-14 business days for it to clear customs.

                    {this.props.carrier == 'USPS'
                        ? <span> If you haven&rsquo;t received your package by then, please contact your local post office with your tracking number to find out if they are holding your package.</span>
                        : ''
                    }
                </p>

            )
        }
    }

    renderTrackingStatusNotice() {
        if (this.props.trackingNumbers.length > 0) {
            return (
                <p style={{...styles.paragraph, ...{marginTop: '30px'}}}>
                    <b>Note:</b> please allow some time for the status of the shipment to correctly display with the carrier.
                </p>
            )
        }
    }

    renderOrderItems() {
        return (
            <table width="100%" style={styles.table}>
                <tbody>
                {
                    this.props.orderItems.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td align="center" style={styles.tableData}>
                                    <img src={item.value.thumbnailUrl} width="50" height="50" style={{ maxWidth: '50px', maxHeight: '50px', width: 'auto', marginTop: '4px'}} />
                                </td>
                                <td style={{...styles.tableData, ...{padding: '7px 7px 0'}}}>
                                    <p style={styles.paragraph}>
                                        {item.value.orderItem.quantity}
                                        &nbsp;&times;&nbsp;
                                        {item.value.productGroup.title}
                                        {item.value.buildOptions.option1 ? ` / ${item.value.buildOptions.option1}`: ''}
                                        {item.value.buildOptions.option4 ? ` / ${item.value.buildOptions.option4}`: ''}
                                        {item.value.buildOptions.option2 ? ` / ${item.value.buildOptions.option2}`: ''}
                                        {item.value.buildOptions.option3 ? ` / ${item.value.buildOptions.option3}`: ''}
                                    </p>

                                    <p style={{
                                        fontSize: '9px',
                                        color: '#898884'
                                    }}>{this.props.estimatedDeliveryDate}</p>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        )
    }

    render() {
        return (
            <Layout>
                <Header />
                <Content>
                    <h2 style={styles.h1}>Your order has&nbsp;shipped!</h2>

                    {this.renderCTAButton()}

                    <p style={styles.paragraph}>Some of the items from order #{this.props.orderNumber} have now been shipped.</p>

                    {this.renderTrackingNumbers()}

                    {this.renderCustomsWarning()}

                    {this.renderOrderItems()}

                    {this.renderTrackingStatusNotice()}
                </Content>
                <SocialLinks />
            </Layout>
        );
    }
}
