import Oy from 'oy-vey';
import React from 'react'
import styles from '../styles'

const {Table, TBody, TR, TD} = Oy;

const wrapper = {
    // backgroundColor: '#222222',
    // color: '#ffffff',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    padding: '20px 0',
}

const footer = {
    width: styles.width,
    marginLeft: 'auto',
    marginRight: 'auto',
}

export default (props) => {
    return (
        <Table width="100%">
            <TBody>
                <TR>
                    <TD style={wrapper}>
                        <div style={footer}>
                            Copyright 2017 Lumi, inc
                        </div>
                    </TD>
                </TR>
            </TBody>
        </Table>
    )
}
