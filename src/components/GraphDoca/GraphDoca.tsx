import styles from './GraphDoca.module.scss';

interface GraphDocaProps {
  translate: (key: string) => string;
}

export function GraphDoca({ translate }: GraphDocaProps) {
  return (
    <div className={styles.graphi__doca_name}>
      <div className={styles.graphi__doca}>
        <section>
          <div className={styles.graphi__doca_title}>
            {translate('graphdoca_name')}
          </div>
          <div className={styles.graphi__doca_info}></div>
        </section>
      </div>
    </div>
  );
}
