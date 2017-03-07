import Oy from 'oy-vey';
import React from 'react'
import styles from '../styles'

const {Table, TBody, TR, TD} = Oy;

const wrapper = {
    backgroundColor: '#FF4E31',
    color: '#FFFFFF',
    padding: '8px 0',
}

const header = {
    width: styles.width,
    marginLeft: 'auto',
    marginRight: 'auto',
}

const brand = {
    fontFamily: styles.fontFamily
}

export default (props) => {
    return (
        <Table width="100%">
            <TBody>
                <TR>
                    <TD style={wrapper}>
                        <div style={header}>
                            <p style={brand}>Lumi</p>
                        </div>
                    </TD>
                </TR>
            </TBody>
        </Table>
    )
}
