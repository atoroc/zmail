import React from 'react'
import styles from '../styles'

export default (props) => {
    return (
        <table width="100%" style={styles.table}>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}
