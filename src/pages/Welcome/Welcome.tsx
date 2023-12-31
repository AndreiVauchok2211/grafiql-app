import styles from './Welcome.module.scss';

interface WelcomePageProps {
  translate: (key: string) => string;
}

export function Welcome({ translate }: WelcomePageProps) {
  return <h1 className={styles.welcome_title}>{translate('welcome')}</h1>;
}
