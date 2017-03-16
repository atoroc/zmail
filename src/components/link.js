import React from 'react'
import styles from '../styles'

export default (props) => {
    return (
        <a href={props.href} style={styles.link}>
            {props.children}
        </a>
    )
}
