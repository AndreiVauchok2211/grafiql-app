import styles from './Graphi.module.scss';
interface GraphiPageProps {
  translate: (key: string) => string;
}

export function Graphi({ translate }: GraphiPageProps) {
  return <div className={styles.graphi_page}>{translate('welcome_title')}</div>;
}
