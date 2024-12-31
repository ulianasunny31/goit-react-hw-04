/* eslint-disable react/prop-types */
const ImageCard = ({url, descr}) => {
  return (
    <div>
  <img src={url} alt={descr} />
</div>

  )
}

export default ImageCard