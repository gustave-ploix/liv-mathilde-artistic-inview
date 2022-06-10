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
            "alt": "research about shadow with ink"
        },
        {
            "src": image03,
            "alt": "person wearing nuée's drape"
        },
        {
            "src": image04,
            "alt": "Nuée's drape laying on the floor"
        },
        {
            "src": image05,
            "alt": "installation of nuée's pillow, drape and curtains."
        },
        {
            "src": image06,
            "alt": "research about trasparence."
        }
    ];



    const firstPart = firstPartImages.map((object, index) => (
        <FullPageGallery key={index} propSrc={object.src} propAlt={object.alt} />
    ))

    return (
        <GalleryLayout>
            {firstPart}
            <RowGallery firstSrc={image07} firstAlt="installation of nuée's pillows and drapes" secondSrc={image08} secondAlt="details of nuée's drape" />
            <RowGallery firstSrc={image09} firstAlt="orange detail on a nuée's drape" secondSrc={image10} secondAlt="orange nuée's curtain" />
            <RowGallery firstSrc={image11} firstAlt="yellow nuée's curtain" secondSrc={image12} secondAlt="yellow nuée's pillow on a green drape" />
            <RowGallery firstSrc={image13} firstAlt="blue nuée's curtain" secondSrc={image14} secondAlt="research about blue mark" />
            <RowGallery firstSrc={image15} firstAlt="blue detail" secondSrc={image16} secondAlt="person sleeping inside nuée's blue drape" />
            <RowGallery firstSrc={image17} firstAlt="yellow curtain pending" secondSrc={image18} secondAlt="research about melting the yellow and blue colors" />
            <RowGallery firstSrc={image19} firstAlt="bed entirely covered with nuée's pink drapes" secondSrc={image20} secondAlt="melting of two nuée's drape" />
            <FullPageGallery propSrc={image21} propAlt="person sleeping inside the nuée's drapes" />
        </GalleryLayout>
    )
}