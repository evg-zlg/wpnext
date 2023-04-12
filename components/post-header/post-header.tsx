import styles from './post-header.module.scss';
import postWrap from '../../styles/wrapper.module.scss';
import Image from 'next/image';

export default function PostHeader({ title, coverImage, date }) {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.imgWrapper}>
          <Image
            fill
            alt={`Cover Image for ${title}`}
            src={coverImage?.node.sourceUrl}
            className={styles.img}
          />
        </div>
        <div className={postWrap.postWrapper}>
          <div className={styles.headerInfo}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.date}>{date}</p>
          </div>
        </div>
      </div>
    </>
  );
}
