import './index.css'
const Thumb = props => {
  const {eachImage, getId, isActive} = props
  const {thumbnailUrl, thumbnailAltText} = eachImage
  const onClickImage = () => {
    getId(eachImage)
  }
  const css = isActive ? null : "img"

  return (
    <li>
      <button>
        <img
          className={css}
          alt={thumbnailAltText}
          src={thumbnailUrl}
          onClick={onClickImage}
        />
      </button>
    </li>
  )
}

export default Thumb
