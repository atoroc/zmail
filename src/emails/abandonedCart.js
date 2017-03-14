import React from "react"
import styles from "../styles"
import Layout from "../components/layout"
import Header from "../components/header"
import Content from "../components/content"
import SocialLinks from "../components/social"
import CTAButton from "../components/ctaButton"

const appStyles = {
    backgroundColor: "#f7f6f5",
    fontFamily: styles.fontFamily,
}

export default class AbandonedCart extends React.Component {
    static options = {
        title: "Welcome to Lumi!",
        headCSS: "body { background-color: #f7f6f5; }",
        previewText: "Welcome to Lumi!",
    }

    static propTypes = {
        url: React.PropTypes.string.isRequired,
    }

    renderGreeting() {
        if (this.props.name) {
            return <p>Dear {this.props.name},</p>
        } else {
            return <p>Hey there!</p>
        }
    }

    render() {
        return (
            <Layout>
                <Header />
                <Content>
                    <h2 style={styles.h1}>Pick up where you left off</h2>
                    <CTAButton
                        href={this.props.url}
                        buttonText={"Pick back up"}
                    />
                    {this.renderGreeting()}

                    <p style={styles.paragraph}>
                        We noticed you left your Lumi products on the shelf today. Did anything go wrong? Can we help? We're always looking to improve and would love your feedback.
                    </p>

                    <p style={styles.paragraph}>
                        Should you decide to change your mind, we've set your order aside and have saved the contents of your cart here:
                    </p>

                    <p style={styles.paragraph}>
                        <a style={styles.link} href={this.props.url}>
                            {this.props.url}
                        </a>
                    </p>

                    <p style={styles.paragraph}>
                        Thanks,<br />Shayna Brody, Customer Service
                    </p>
                </Content>
                <SocialLinks />
            </Layout>
        )
    }
}
