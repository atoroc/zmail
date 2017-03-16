import React from 'react'
import s from '../styles'
import P from '../components/paragraph'

const productsTableRow = (props) => {
    return (
        <tr width="100%" style={s.table}>
            <td style={s.tableData}>
                <img src={props.thumbnail} width={50} height={50} style={{ maxWidth: '50px', maxHeight: '50px', width: 'auto', marginTop: '4px'}} />
            </td>
            <td style={{...s.tableData, ...{padding: '7px 7px 0'}}}>
                <p style={s.paragraph}>
                    {props.quantity}
                    &nbsp;&times;&nbsp;
                    {props.shortTitle}
                    {props.option1 ? ` / ${props.option1}`: ''}
                    {props.option4 ? ` / ${props.option4}`: ''}
                    {props.option2 ? ` / ${props.option2}`: ''}
                    {props.option3 ? ` / ${props.option3}`: ''}
                </p>

                <p style={s.paragraphSmall}>Estimated Delivery: {props.deliveryDate}</p>
            </td>
            <td style={{...s.tableData, ...{verticalAlign: 'middle', padding: '0 7px'}}}>
                <p style={{...s.paragraph, ...{marginBottom: 0}}}>
                    {props.price}
                </p>
            </td>
        </tr>
    )
}

productsTableRow.propTypes = {
    thumbnail: React.PropTypes.string.isRequired,
    option1: React.PropTypes.string.isRequired,
    option2: React.PropTypes.string.isRequired,
    option3: React.PropTypes.string.isRequired,
    option4: React.PropTypes.string.isRequired,
    outputUrl: React.PropTypes.string.isRequired,
    designHeight: React.PropTypes.string.isRequired,
    designWidth: React.PropTypes.string.isRequired,
    quantity: React.PropTypes.number.isRequired,
    shortTitle: React.PropTypes.string.isRequired,
    price: React.PropTypes.string.isRequired,
    deliveryDate: React.PropTypes.string.isRequired,
}

export default productsTableRow
