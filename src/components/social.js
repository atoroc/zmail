import React from 'react'
import styles from '../styles'

const contentStyles = {
    width: styles.width,
    margin: '60px auto',
}

const linkStyles = {
    marginRight: '14px'
}

export default (props) => {
    return (
        <table width="100%" style={contentStyles}>
            <tbody>
                <tr>
                    <td>
                        <p style={{textAlign: 'center', margin: 0, padding: 0}}>
                            <a style={linkStyles} href="http://instagram.com/lumi" target="_blank">
                                <img src="https://s3.amazonaws.com/lumi-assets/social-60-insta-bg2.gif" width="30" height="30" />
                            </a>
                            <a style={linkStyles} href="http://facebook.com/lumi" target="_blank">
                                <img src="https://s3.amazonaws.com/lumi-assets/social-60-fb-bg2.gif" width="30" height="30" />
                            </a>
                            <a style={linkStyles} href="http://twitter.com/lumi" target="_blank">
                                <img src="https://s3.amazonaws.com/lumi-assets/social-60-twitter-bg2.gif" width="30" height="30" />
                            </a>
                            <a href="http://pinterest.com/lumi" target="_blank">
                                <img src="https://s3.amazonaws.com/lumi-assets/social-60-pinterest-bg2.gif" width="30" height="30" />
                            </a>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

