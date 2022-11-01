import sprite from '../../../assets/svg/sprite.svg';
import styles from './spinner.module.css';

function Spinner() {
  return (
    <svg className={styles.spinner}>
      <use href={`${sprite}#icon-spinner`}></use>
    </svg>
  );
}
export default Spinner;
