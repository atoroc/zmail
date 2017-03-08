import React from 'react'
import styles from '../styles'
import {Table, TBody, TR, TD} from 'oy-vey';

const appStyles = {
    backgroundColor: '#f7f6f5',
    fontFamily: styles.fontFamily,
    fontSize: styles.fontSize,
}

export default (props) => {
    return (
        <Table width="100%" style={appStyles}>
            <TBody>
                <TR>
                    <TD>
                        {props.children}
                    </TD>
                </TR>
            </TBody>
        </Table>
    )
}
