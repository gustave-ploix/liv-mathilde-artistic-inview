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
            <FullPageGallery propSrc={image22} propAlt="image of the nuée's catalog" />
            <FullPageGallery propSrc={image23} propAlt="bed covered with nuée's drapes and pillows" />
            <RowGallery firstSrc={image24} secondSrc={image25} firstAlt="grey nuée's pillow" secondAlt="green nuée's pillow" />
            <FullPageGallery propSrc={image26} propAlt="pink nuée's pillow" />
            <FullPageGallery propSrc={image27} propAlt="table covered by a nuée's drape" />
        </NueeGalleryLayout>
    )
}