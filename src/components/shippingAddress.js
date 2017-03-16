import React from 'react'
import s from '../styles'

const ShippingAddress = (props) => {
    return (
        <td>
            <p style={s.boxHeading}>Shipping Address</p>
            <p style={s.boxStyles}>
                {props.name}<br />
                {props.street}<br />
                {props.city}, {props.state} {props.postal_code}<br />
                {! props.country == 'United States' &&
                    <span>{props.country}</span>
                }
            </p>
        </td>
    )
}

ShippingAddress.propTypes = {
    name: React.PropTypes.string.isRequired,
    street: React.PropTypes.string.isRequired,
    city: React.PropTypes.string.isRequired,
    state: React.PropTypes.string.isRequired,
    postal_code: React.PropTypes.string.isRequired,
    country: React.PropTypes.string.isRequired,
}

export default ShippingAddress
