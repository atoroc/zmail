import React from 'react'
import styles from '../styles'

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
        <table width="100%" style={contentStyles}>
            <tbody>
                <tr>
                    <td style={wrapper}>
                        <div>
                            {props.children}
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
