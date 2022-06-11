import styles from './fourthGallery.module.scss';

import FourthGalleryLayout from './fourthGalleryLayout';

import TripleRow from '../../common/tripeRow';
import FullPageGallery from '../../common/fullPageGallery';

import image33 from '../../../assets/images/degignTextile/33.jpg';
import image34 from '../../../assets/images/degignTextile/34.jpg';
import image35 from '../../../assets/images/degignTextile/35.jpg';
import image36 from '../../../assets/images/degignTextile/36.jpg';
import image37 from '../../../assets/images/degignTextile/37.jpg';

export default function FourthGallery() {
    return (
        <FourthGalleryLayout>
            <div className={styles.galleryName}>
                <div className={styles.line}></div>
                <p>
                    VERILIN - Collection Shine
                </p>
            </div>
            <FullPageGallery propSrc={image33} />
            <FullPageGallery propSrc={image34} />
            <FullPageGallery propSrc={image35} />
            <FullPageGallery propSrc={image36} />
            <FullPageGallery propSrc={image37} />
        </FourthGalleryLayout>
    )
}