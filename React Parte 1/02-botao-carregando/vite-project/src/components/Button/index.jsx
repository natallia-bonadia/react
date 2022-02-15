import './styles.css'
import PropTypes from 'prop-types'

function Button(props) {
  const { className, isLoading=true, size=16} = props

  if (isLoading) {
    return (
      <div>
        <button className={className} style={{fontSize: `${size}px`}}>Carregando...</button>
      </div>
    )
  }

  return (
    <div>
      <button className={className} style={{fontSize: `${size}px`}}>Enviar</button>
    </div>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  size: PropTypes.number
}

export default Button