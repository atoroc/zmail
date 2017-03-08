import React from 'react'
import styles from '../styles'
import {Table, TBody, TR, TD} from 'oy-vey';

export default (props) => {
    return (
        <Table width="100%">
            <TBody>
                <TR>
                    <TD>
                        <p style={{margin: '30px 0', textAlign: 'center'}}>
                            <a href="http://lumi.com">
                                <img src={styles.logo.src} width="100px" height="34px" />
                            </a>
                        </p>
                    </TD>
                </TR>
            </TBody>
        </Table>
    )
}
