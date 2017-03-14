import Oy from 'oy-vey';
import React from 'react'
import styles from '../styles'

const wrapper = {
    padding: '15px 0',
    textAlign: 'center',
}

export default (props) => {
    return (
        <table width="100%" style={{marginBottom: '30px'}}>
            <tbody>
                <tr>
                    <td style={wrapper}>
                        <a href={props.href} style={styles.button}>{props.buttonText}</a>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
