/* eslint-disable react/prop-types */
import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'

const ImageGallery = ({ pics}) => {
    console.log(pics);
    
  return (
      <ul className={css.galleryList}>
          {pics.map(({urls, slug, username, description}) => {
              return (
            <li key={`${username}+${slug}`}>
                 <ImageCard url={urls.small} descr={description}/>
            </li>
)          })}
    </ul>
  )
}

export default ImageGallery