import Oy from 'oy-vey';
import React from 'react'
import styles from '../styles'

const {Table, TBody, TR, TD} = Oy;

const wrapper = {
    padding: '60px 0',
}

const header = {
    width: styles.width,
    marginLeft: 'auto',
    marginRight: 'auto',
}

export default (props) => {
    return (
        <Table width="100%" style={header}>
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
