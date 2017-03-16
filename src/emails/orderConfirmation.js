import React from 'react'
import s from '../styles'
import Layout from '../components/layout'
import Header from '../components/header'
import Content from '../components/content'
import SocialLinks from '../components/social'
import P from '../components/paragraph'
import Spacer from '../components/spacer'
import Link from '../components/link'
import ProductsTable from '../components/productsTable'
import ProductsTableRow from '../components/productsTableRow'
import BillingAddress from '../components/billingAddress'
import ShippingAddress from '../components/shippingAddress'

const money = (amount) => {
    const dollars = amount / 100

    return dollars.toLocaleString("en-US", {style: "currency", currency: "USD"})
}

export default class QuoteConfirmation extends React.Component {
    static options = {
        title: 'Welcome to Lumi!',
        headCSS: s.headCSS,
        previewText: 'Welcome to Lumi!'
    }

    static propTypes = {
        discountSavings: React.PropTypes.number.isRequired,
        taxPrice: React.PropTypes.number.isRequired,
        shippingPrice: React.PropTypes.number.isRequired,
        totalPrice: React.PropTypes.number.isRequired,
        billingAddress: React.PropTypes.object.isRequired,
        shippingAddress: React.PropTypes.object.isRequired,
        lineItems: React.PropTypes.array.isRequired,
    }

    static defaultProps = {
        discountSavings: 4000,
        taxPrice: 2400,
        shippingPrice: 500,
        totalPrice: 7100,
        billingAddress: {
            name: 'David Hemphill',
            street: '3847 S Hillcrest Ave',
            city: 'Springfield',
            state: 'MO',
            postal_code: '65807',
            country: 'United States',
        },
        shippingAddress: {
            name: 'David Hemphill',
            street: '3847 S Hillcrest Ave',
            city: 'Springfield',
            state: 'MO',
            postal_code: '65807',
            country: 'United States',
        },
        lineItems: [
            {
                thumbnail: 'https://www.gravatar.com/avatar/2821f93cef33ccd01b1262ac41f87d9c?s=80',
                option1: 'Brown',
                option2: 'Yellow',
                option3: 'Red',
                option4: 'Blue',
                outputUrl: 'http://davidhemphill.com',
                designHeight: '4in',
                designWidth: '6in',
                quantity: 34,
                shortTitle: 'Some Cool Boxes',
                price: '$1235.67',
                deliveryDate: 'tomorrow',
            },
            {
                thumbnail: 'https://www.gravatar.com/avatar/2821f93cef33ccd01b1262ac41f87d9c?s=80',
                option1: 'Brown',
                option2: 'Yellow',
                option3: 'Red',
                option4: 'Blue',
                outputUrl: 'http://davidhemphill.com',
                designHeight: '4in',
                designWidth: '6in',
                quantity: 34,
                shortTitle: 'Some Cool Boxes',
                price: '$1235.67',
                deliveryDate: 'tomorrow',
            },
        ]
    }

    renderLineItems() {
        return this.props.lineItems.map((lineItem) => {
            return (
                <ProductsTableRow {...lineItem} />
            )
        })
    }

    render () {
        return (
            <Layout>
                <Header />
                <Content>
                    <h2 style={s.h1}>Thanks!</h2>

                    <P>
                        Your order was successfully placed. We're already at work getting it ready for you! If you have
                    any questions, feel free to reply to this email or get in touch at <Link href="mailto:hello@lumi.com">hello@lumi.com</Link>
                    </P>

                    <Spacer />

                    <ProductsTable>
                        {this.renderLineItems()}
                    </ProductsTable>

                    <Spacer />

                    <table width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <P>Shipping</P>
                                </td>
                                <td style={{textAlign: 'right'}}>
                                    <P>{money(this.props.shippingPrice)}</P>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <P>Discount</P>
                                </td>
                                <td style={{textAlign: 'right'}}>
                                    <P>{money(this.props.discountSavings)}</P>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <P>Tax</P>
                                </td>
                                <td style={{textAlign: 'right'}}>
                                    <P>{money(this.props.taxPrice)}</P>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <P><b>Total</b></P>
                                </td>
                                <td style={{textAlign: 'right'}}>
                                    <P><b>{money(this.props.totalPrice)}</b></P>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <Spacer />

                    <table width="100%">
                        <tbody>
                            <tr>
                                {this.props.shippingAddress && <ShippingAddress {...this.props.shippingAddress} /> }
                                {this.props.billingAddress &&<BillingAddress {...this.props.billingAddress} /> }
                            </tr>
                        </tbody>
                    </table>
                </Content>
                <SocialLinks />
            </Layout>
        )
    }
}

