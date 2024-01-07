import styles from './GraphJson.module.scss';

interface GraphJsonProps {
  translate: (key: string) => string;
}

export function GraphJson({ translate }: GraphJsonProps) {
  return (
    <div className={styles.graphi__json_view}>
      <div className={styles.graphi__json_query}>
        {translate(`graphjson_query`)}
        <textarea rows={25} className={styles.graphi__query_post}></textarea>
      </div>
      <div className={styles.graphi__json_json}>
        {translate(`graphjson_json`)}
        <textarea
          rows={25}
          className={styles.graphi__query_response}
          readOnly
        ></textarea>
      </div>
    </div>
  );
}
