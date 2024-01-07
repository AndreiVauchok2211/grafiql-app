import { clsx } from '../../utils/clsx';
import styles from './Footer.module.scss';
import rsSchoolJs from '../../../public/rsSchoolJs.svg';
import github from '../../../public/github.svg';

interface FooterPageProps {
  translate: (key: string) => string;
}

export function Footer({ translate }: FooterPageProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container__author}>
        <a
          className={styles.footer__link}
          href="https://github.com/SergeyVolkov03"
        >
          <img className={styles.footer__img} src={github} alt="photo author" />
          Sergey Volkov
        </a>
        <a className={styles.footer__link} href="https://github.com/Fuzailkhon">
          <img className={styles.footer__img} src={github} alt="photo author" />
          Fuzailkhon
        </a>
        <a
          className={styles.footer__link}
          href="https://github.com/AndreiVauchok2211"
        >
          <img className={styles.footer__img} src={github} alt="photo author" />
          Andrei Vauchok
        </a>
      </div>
      <div className={styles.container__footer_year}>
        <p className={styles.footer__year}>2024</p>
      </div>
      <div className={styles.container__course}>
        <a className={styles.footer__link} href="https://rs.school/react/">
          <img
            className={clsx(styles.footer_rs, styles.footer__img)}
            src={rsSchoolJs}
            alt="photo author"
          />
          {translate('footer_course')}
        </a>
      </div>
    </footer>
  );
}
