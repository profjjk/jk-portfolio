import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Dispatch, SetStateAction } from 'react';
import { Image } from '../../utils/types';

export const ImageModal = ({ photo, setPhoto }: {
    photo: Image,
    setPhoto: Dispatch<SetStateAction<Image | null>>
}) => {
    return (
        <div className={'image-modal'}>
            <div className={'modal-content'}>
                <div className={'close'} onClick={() => setPhoto(null)}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <img src={photo.src} alt={photo.alt} />
            </div>
        </div>
    )
}