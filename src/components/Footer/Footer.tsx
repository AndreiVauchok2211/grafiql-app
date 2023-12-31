import styles from './Footer.module.scss';

interface FooterPageProps {
  translate: (key: string) => string;
}

export function Footer({ translate }: FooterPageProps) {
  return (
    <footer className={styles.welcome_title}>
      {translate('welcome_title')}
    </footer>
  );
}
