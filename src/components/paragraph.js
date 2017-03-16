import React from 'react'
import styles from '../styles'

export default (props) => {
    return (
        <p style={styles.paragraph}>
            {props.children}
        </p>
    )
}
