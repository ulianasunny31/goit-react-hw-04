/* eslint-disable react/prop-types */
import Modal from 'react-modal';
import css from "./ImageModal.module.css"

Modal.setAppElement('#root');

const ImageModal = ({ photoInfo, onModalClose }) => {
  console.log(photoInfo.user.instagram_username);
  
  return (
      <Modal
          isOpen={!!photoInfo}
          onRequestClose={onModalClose}
          className={css.modal}
           overlayClassName={css.overlay}
      >
      {photoInfo &&
        <div>
          <img className={css.modalImg} src={photoInfo.urls.regular} />
        <div className={css.imageTextDiv}>
          <p>{photoInfo.user.instagram_username}</p>
          <p>{photoInfo.likes}</p>
          </div>
        </div>
      }
          
    </Modal>
  )
}

export default ImageModal;