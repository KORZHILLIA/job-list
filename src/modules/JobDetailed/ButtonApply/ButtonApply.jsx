import styles from './buttonApply.module.css';

const ButtonApply = ({ text, type }) => {
  return (
    <button className={styles.btn} type={type}>
      {text}
    </button>
  );
};

export default ButtonApply;
