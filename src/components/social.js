import React from 'react'
import styles from '../styles'
import {Table, TBody, TR, TD} from 'oy-vey';

const contentStyles = {
    width: styles.width,
    margin: '60px auto',
}

const linkStyles = {
    marginRight: '14px'
}

export default (props) => {
    return (
        <Table width="100%" style={contentStyles}>
            <TBody>
                <TR>
                    <TD>
                        <p style={{textAlign: 'center', margin: 0, padding: 0}}>
                            <a style={linkStyles} href="http://instagram.com/lumi" target="_blank">
                                <img src="https://s3.amazonaws.com/lumi-assets/social-60-insta-bg2.gif" width="30px" height="30px" />
                            </a>
                            <a style={linkStyles} href="http://facebook.com/lumi" target="_blank">
                                <img src="https://s3.amazonaws.com/lumi-assets/social-60-fb-bg2.gif" width="30px" height="30px" />
                            </a>
                            <a style={linkStyles} href="http://twitter.com/lumi" target="_blank">
                                <img src="https://s3.amazonaws.com/lumi-assets/social-60-twitter-bg2.gif" width="30px" height="30px" />
                            </a>
                            <a href="http://pinterest.com/lumi" target="_blank">
                                <img src="https://s3.amazonaws.com/lumi-assets/social-60-pinterest-bg2.gif" width="30px" height="30px" />
                            </a>
                        </p>
                    </TD>
                </TR>
            </TBody>
        </Table>
    )
}

