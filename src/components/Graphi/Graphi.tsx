import { GraphJson } from '../GraphJson';
import { GraphDoca } from '../GraphDoca';
import styles from './Graphi.module.scss';
import startSvg from '../../../public/startSvg.svg';

interface GraphiPageProps {
  translate: (key: string) => string;
}

export function Graphi({ translate }: GraphiPageProps) {
  return (
    <div className={styles.graphi_container}>
      <div className={styles.graphi_page}>
        <div className={styles.graphi__sidebar}>
          <button className={styles.graphi_start_btn}>
            {/* <img src="../../../public/start-svg.svg" alt="book" /> */}
            <img src={startSvg} alt="book" />
          </button>
          <button className={styles.btn__doc_open}>
            <img src="../../../public/book-open-svg.svg" alt="book" />
          </button>
          <button className={styles.btn__doc_close}>
            <img src="../../../public/book-svg.svg" alt="book" />
          </button>
        </div>
        <GraphDoca translate={translate} />
        <div className={styles.graphi__horizontal_bar}></div>
        <GraphJson translate={translate} />
      </div>
    </div>
  );
}
