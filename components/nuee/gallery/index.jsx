import GalleryLayout from './galleryLayout';

import styles from './gallery.module.scss';

import FullPageGallery from '../../common/fullPageGallery';

import image01 from '../../../assets/images/nuee/01.jpg';
import image02 from '../../../assets/images/nuee/02.jpg';
import image03 from '../../../assets/images/nuee/03.jpg';
import image04 from '../../../assets/images/nuee/04.jpg';
import image05 from '../../../assets/images/nuee/05.jpg';
import image06 from '../../../assets/images/nuee/06.jpg';

export default function Gallery() {

    const firstPartImages = [
        {
            "src": image01,
            "alt": "pillow and drape made by Nuée studio"
        },
        {
            "src": image02,
            "alt": "blabla"
        },
        {
            "src": image03,
            "alt": "blabla"
        },
        {
            "src": image04,
            "alt": "blabla"
        },
        {
            "src": image05,
            "alt": "blabla"
        },
        {
            "src": image06,
            "alt": "blabla"
        }
    ];


    const firstPart = firstPartImages.map((object) => (
        <FullPageGallery propSrc={object.src} propAlt={object.alt} />
    ))

    return (
        <GalleryLayout>
            {firstPart}
        </GalleryLayout>
    )
}