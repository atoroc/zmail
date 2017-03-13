import React from 'react'
import styles from '../styles'
import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content'
import SocialLinks from '../components/social'
import CTAButton from '../components/ctaButton'
import {Table, TBody, TR, TD} from 'oy-vey';

const productTableStyles = {
    borderTop: '1px solid #e9e9e6',
}

const productTableTdStyles = {
    height: '50px',
    verticalAlign: 'middle',
    borderBottom: '1px solid #e9e9e6'
}

export default class ShipmentConfirmation extends React.Component {
    static defaultProps = {
        orderNumber: '1234567890',
        carrier: 'USPS',
        trackingUrl: 'http://yahoo.com',
        trackingNumber: '',
        destinationCountry: 'England',
        estimatedDeliveryDate: 'Estimated Delivery Date',
        trackingNumbers: [
            'JDJF643573878SGJK'
        ],
        orderItems: [
            {
                value: {
                    thumbnailUrl: 'https://www.gravatar.com/avatar/2821f93cef33ccd01b1262ac41f87d9c?s=80',
                    orderItem: {
                        orderedDesign: '',
                        orderedBuild: '',
                        quantity: 40,
                    },
                    productGroup: {
                        title: 'Standard Mailer Boxes'
                    },
                    product: '',
                    buildOptions: {
                        option1: 'Option 1',
                        option2: 'Option 2',
                        option3: 'Option 3',
                        option4: 'Option 4',
                    }
                }
            }
        ]
    }

    static propTypes = {
        orderNumber: React.PropTypes.string.isRequired,
        carrier: React.PropTypes.string.isRequired,
        trackingUrl: React.PropTypes.string.isRequired,
        trackingNumber: React.PropTypes.string.isRequired,
        destinationCountry: React.PropTypes.string.isRequired,
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
                <p style={styles.paragraph}>
                    They are being shipped via {this.props.carrier} with tracking numbers:
                </p>
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
            <Table width="100%" style={productTableStyles}>
                <TBody>
                {
                    this.props.orderItems.map((item) => {
                        return (
                            <TR>
                                <TD align="center" style={productTableTdStyles}>
                                    <img src={item.value.thumbnailUrl} style={{ maxWidth: '50px', maxHeight: '50px', width: 'auto', marginTop: '4px'}} />
                                </TD>
                                <TD style={{...productTableTdStyles, ...{padding: '7px 7px 0'}}}>
                                    <p style={styles.paragraph}>
                                        {item.value.orderItem.quantity} &times;
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
                                </TD>
                            </TR>
                        )
                    })
                }
                </TBody>
            </Table>
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
