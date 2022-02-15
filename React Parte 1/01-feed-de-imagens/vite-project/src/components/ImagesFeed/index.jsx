import PropTypes from 'prop-types'
import './styles.css'

function ImagesFeed({columnCount}) {

  const imageUrl = 'https://source.unsplash.com/random/?city,night'
  
  const images = Array.from({length: 12}, (_image, index) => {
    return {
      id: index,
      url: `${imageUrl}${index}`
    }
  })
  return (
    <div className='images-feed'>
      <ul className='images-list'>
        {
          images.map((image) => 
      <li key={image.id} style={{flexBasis: `${100/columnCount}%`}}>
            <img src={image.url} alt="Imagem aleatória de cidade à noite" />
          </li>
          )
        }
      </ul>
    </div>
  )
}

ImagesFeed.propTypes = {
  columnCount: PropTypes.number,
}

export default ImagesFeed