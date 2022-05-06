import styles from './contact.module.scss';

import Image from 'next/image';
import artworkImage from '../../assets/images/landing page/artwork.jpg';


import ContactLayout from './ContactLayout'

export default function Footer() {
    return (

        <ContactLayout>

            <div className={styles.contactSection}>

                <div className={styles.left}>
                    <div className={styles.imageContainer}>

                        <Image
                            src={artworkImage}
                            layout="fill"
                            objectFit='cover'
                            objectPosition="center"
                            quality={1}
                        />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.linksContainer}>

                        <div className={styles.linksHeader}>
                            <p>LIV MATHILDE MÉCHIN</p>
                        </div>
                        <div className={styles.separator}></div>

                        <div className={styles.linksBody}>
                            <div className={styles.actionButtons}>
                                <p><a href="mailto:artisticinview@gmail.com">artisticinview@gmail.com</a></p>
                                <p><a href="tel:+33674573112">+33 (0) 6 74 57 31 12</a></p>
                            </div>
                            <p>2 Rue Marcelin Berthelot</p>
                            <p>93100 - MONTREUIL</p>
                        </div>
                    </div>
                </div>
            </div>


        </ContactLayout>

    )
}