import React from 'react'
import styles from '../styles'

const wrapper = {
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
        <table width="100%">
            <tbody>
                <tr>
                    <td style={wrapper}>
                        <div style={footer}>
                            Copyright 2017 Lumi, inc
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
