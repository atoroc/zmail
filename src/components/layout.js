import React from 'react'
import styles from '../styles'

const appStyles = {
    backgroundColor: '#f7f6f5',
    fontFamily: styles.fontFamily,
    fontSize: styles.fontSize,
}

export default (props) => {
    return (
        <table width="100%" style={appStyles}>
            <tbody>
                <tr>
                    <td>
                        {props.children}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
