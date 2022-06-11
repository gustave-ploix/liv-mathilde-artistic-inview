import TripleRow from '../../common/tripeRow';
import RowGallery from '../../common/rowGallery';
import FullPageGallery from '../../common/fullPageGallery';

import image25 from '../../../assets/images/degignTextile/25.jpg';
import image26 from '../../../assets/images/degignTextile/26.jpg';
import image27 from '../../../assets/images/degignTextile/27.jpg';
import image28 from '../../../assets/images/degignTextile/28.jpg';
import image29 from '../../../assets/images/degignTextile/29.jpg';
import image30 from '../../../assets/images/degignTextile/30.jpg';
import image31 from '../../../assets/images/degignTextile/31.jpg';
import image32 from '../../../assets/images/degignTextile/32.jpg';




import styles from './thirdGallery.module.scss';

import ThirdGalleryLayout from './thirdGalleryLayout';

export default function ThirdGallery() {
    return (

        <ThirdGalleryLayout>
            <div className={styles.galleryName}>
                <div className={styles.line}></div>
                <p>
                    VERILIN - Collection MINERALIS
                </p>
            </div>
            <TripleRow firstSrc={image25} secondSrc={image26} thirdSrc={image27} />
            <RowGallery firstSrc={image28} secondSrc={image29} />
            <RowGallery firstSrc={image30} secondSrc={image31} firstAlt="" secondAlt="" />
            <FullPageGallery propSrc={image32} propAlt="table with eatable decoration on the liv mathilde mechin's drape" />
        </ThirdGalleryLayout>

    )
}