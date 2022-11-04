import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import SVGCreator from 'shared/components/SVGCreator';
import styles from './buttonBackToBoard.module.css';

const ButtonBackToBoard = ({ text }) => {
  const navigate = useNavigate();
  return (
    <button className={styles.btn} type="button" onClick={() => navigate(-1)}>
      <div className={styles.arrowContainer}>
        <SVGCreator iconName="backArrow" width={10} height={18} />
      </div>
      {text}
    </button>
  );
};

ButtonBackToBoard.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonBackToBoard;
