import styles from './benefits.module.css';

const Benefits = ({ items }) => {
  const elements = items.map((item, idx) => (
    <li className={styles.item} key={`${item}-${idx}`}>{item}</li>
  ));
  return <ul className={styles.list}>{elements}</ul>;
};

export default Benefits;
