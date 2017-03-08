import Oy from 'oy-vey';
import React from 'react'
import styles from '../styles'

const {Table, TBody, TR, TD} = Oy;

const wrapper = {
    padding: '15px 0',
    textAlign: 'center',
}

export default (props) => {
    return (
        <Table width="100%" style={{marginBottom: '30px'}}>
            <TBody>
                <TR>
                    <TD style={wrapper}>
                        <a href={props.href} style={styles.button}>{props.buttonText}</a>
                    </TD>
                </TR>
            </TBody>
        </Table>
    )
}
