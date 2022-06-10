import NueeGalleryLayout from "./nueeGalleryLayout";

import styles from './nueeGallery.module.scss';

import RowGallery from '../../common/rowGallery';
import FullPageGallery from '../../common/fullPageGallery';

import image22 from '../../../assets/images/nuee/22.jpg';
import image23 from '../../../assets/images/nuee/23.jpg';
import image24 from '../../../assets/images/nuee/24.jpeg';
import image25 from '../../../assets/images/nuee/25.jpeg';
import image26 from '../../../assets/images/nuee/26.jpeg';
import image27 from '../../../assets/images/nuee/27.jpeg';


export default function NueeGallery() {
    return (
        <NueeGalleryLayout>
            <FullPageGallery propSrc={image22} />
            <FullPageGallery propSrc={image23} />
            <RowGallery firstSrc={image24} secondSrc={image25} />
            <FullPageGallery propSrc={image26} />
            <FullPageGallery propSrc={image27} />
        </NueeGalleryLayout>
    )
}