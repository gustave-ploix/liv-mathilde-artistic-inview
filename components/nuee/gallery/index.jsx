import GalleryLayout from './galleryLayout';

import styles from './gallery.module.scss';

import FullPageGallery from '../../common/fullPageGallery';
import RowGallery from '../../common/rowGallery';

import image01 from '../../../assets/images/nuee/01.jpg';
import image02 from '../../../assets/images/nuee/02.jpg';
import image03 from '../../../assets/images/nuee/03.jpg';
import image04 from '../../../assets/images/nuee/04.jpg';
import image05 from '../../../assets/images/nuee/05.jpg';
import image06 from '../../../assets/images/nuee/06.jpg';

import image07 from '../../../assets/images/nuee/07.jpg';
import image08 from '../../../assets/images/nuee/08.jpg';
import image09 from '../../../assets/images/nuee/09.jpg';
import image10 from '../../../assets/images/nuee/10.jpeg';
import image11 from '../../../assets/images/nuee/11.jpg';
import image12 from '../../../assets/images/nuee/12.jpeg';
import image13 from '../../../assets/images/nuee/13.jpg';
import image14 from '../../../assets/images/nuee/14.png';
import image15 from '../../../assets/images/nuee/15.jpg';
import image16 from '../../../assets/images/nuee/16.jpg';
import image17 from '../../../assets/images/nuee/17.jpg';
import image18 from '../../../assets/images/nuee/18.jpg';
import image19 from '../../../assets/images/nuee/19.jpeg';
import image20 from '../../../assets/images/nuee/20.jpg';

import image21 from '../../../assets/images/nuee/21.jpeg';

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

        const secondPartImages = [
            { "src": image07, "alt": "blabla" },
            { "src": image08, "alt": "blabla" },
            { "src": image09, "alt": "blabla" },
            { "src": image10, "alt": "blabla" },
            { "src": image11, "alt": "blabla" },
            { "src": image12, "alt": "blabla" },
            { "src": image13, "alt": "blabla" },
            { "src": image14, "alt": "blabla" },
            { "src": image15, "alt": "blabla" },
            { "src": image16, "alt": "blabla" },
            { "src": image17, "alt": "blabla" },
            { "src": image18, "alt": "blabla" },
            { "src": image19, "alt": "blabla" },
            { "src": image20, "alt": "blabla" }
        ]



    return (
        <GalleryLayout>
            {firstPart}
            <RowGallery firstSrc={image07} secondSrc={image08} />
            <RowGallery firstSrc={image09} secondSrc={image10} />
            <RowGallery firstSrc={image11} secondSrc={image12} />
            <RowGallery firstSrc={image13} secondSrc={image14} />
            <RowGallery firstSrc={image15} secondSrc={image16} />
            <RowGallery firstSrc={image17} secondSrc={image18} />
            <RowGallery firstSrc={image19} secondSrc={image20} />
            <FullPageGallery propSrc={image21} />
        </GalleryLayout>
    )
}