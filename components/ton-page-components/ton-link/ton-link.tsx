import styles from './ton-link.module.scss';

interface ITonlinkProps {
  text: string;
  href: string;
}

function TonLink({ text, href }: ITonlinkProps) {
  return (
    <a
      className={styles.link}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {text}
      <span className={styles.arrow} />
    </a>
  );
}

export { TonLink };
