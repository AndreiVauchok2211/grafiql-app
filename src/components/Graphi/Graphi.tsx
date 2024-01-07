import { GraphJson } from '../GraphJson';
import { GraphDoca } from '../GraphDoca';
import styles from './Graphi.module.scss';
import startSvg from '../../../public/startSvg.svg';
import bookOpen from '../../../public/bookOpen.svg';
import bookClose from '../../../public/bookClose.svg';

interface GraphiPageProps {
  translate: (key: string) => string;
}

export function Graphi({ translate }: GraphiPageProps) {
  return (
    <div className={styles.graphi_container}>
      <div className={styles.graphi_page}>
        <div className={styles.graphi__sidebar}>
          <button className={styles.graphi_start_btn}>
            <img src={startSvg} alt="start" />
          </button>
          <button className={styles.btn__doc_open}>
            <img src={bookOpen} alt="book_open" />
          </button>
          <button className={styles.btn__doc_close}>
            <img src={bookClose} alt="book_close" />
          </button>
        </div>
        <GraphDoca translate={translate} />
        <div className={styles.graphi__horizontal_bar}></div>
        <GraphJson translate={translate} />
      </div>
    </div>
  );
}
