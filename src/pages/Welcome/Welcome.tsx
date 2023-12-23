import { useTranslation } from 'react-i18next';
import styles from './Welcome.module.scss';

export function Welcome() {
  const { t } = useTranslation();

  return <h1 className={styles.welcome_title}>{t('home_page.title')}</h1>;
}
