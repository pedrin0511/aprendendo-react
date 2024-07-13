import PropTypes from 'prop-types'

function Item({marca , lançamento}){
    return(
        <>
        <li>
            {marca} - {lançamento}
        </li>
        </>
    )
}

Item.prototype = {
    marca: PropTypes.string.isRequired,
    lançamento: PropTypes.number
}

Item.defaultProps = {
    marca: 'faltou a marca',
    lançamento: 0

}

export default Item