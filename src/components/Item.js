import PropTypes from 'prop-types'

function Item({ marca, lancamento}) {
    return(
        <>
            <li>
                {marca} - {lancamento}
            </li>
            <p>Teste</p>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number.isRequired,
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    lancamento: 'Faltou o ano de lançamento'
}

export default Item