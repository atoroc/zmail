import React from 'react'
import styles from '../styles'

export default (props) => {
    return (
        <table width="100%">
            <tbody>
                <tr>
                    <td>
                        <p style={{margin: '30px 0', textAlign: 'center'}}>
                            <a href="http://lumi.com">
                                <img src={styles.logo.src} width="100px" height="34px" />
                            </a>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
