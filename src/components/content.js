import React from 'react'
import styles from '../styles'
import {Table, TBody, TR, TD} from 'oy-vey';

const wrapper = {
    padding: '0px 0',
}

const contentStyles = {
    width: styles.width,
    marginLeft: 'auto',
    marginRight: 'auto',
}

export default (props) => {
    return (
        <Table width="100%" style={contentStyles}>
            <TBody>
                <TR>
                    <TD style={wrapper}>
                        <div>
                            {props.children}
                        </div>
                    </TD>
                </TR>
            </TBody>
        </Table>
    )
}
