import Image, { StaticImageData } from 'next/image';
import styles from './ton-page-apps.module.scss';

import linkArow from './icons/link-arrow-icon.svg';

interface ICardWithAppProps {
  titleIcon: string;
  titleText: string;
  href: string;
  styleClass: string;
  boldDescript: string;
  descript: string;
  img: StaticImageData;
}

function CardWithApp({
  boldDescript,
  descript,
  href,
  img,
  styleClass,
  titleIcon,
  titleText,
}: ICardWithAppProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={styleClass}
    >
      <Image className={styles.linkArrow} src={linkArow} alt="link arrow" />
      <div className={styles.nameCard}>
        <Image src={titleIcon} alt="icon" className={styles.icon} />
        <h3 className={styles.subtitle}>{titleText}</h3>
      </div>
      <p className={styles.boldDescript}>{boldDescript}</p>
      <p className={styles.description}>
        {descript}
      </p>
      <Image
        className={styles.img}
        priority
        src={img}
        alt="mobile screen"
      />
    </a>
  );
}

export { CardWithApp };
