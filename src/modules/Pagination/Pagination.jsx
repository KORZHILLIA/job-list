import { useState } from 'react';
import SVGCreator from 'shared/components/SVGCreator';
import styles from './pagination.module.css';

const Pagination = ({ total, onClick }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [startWith, setStartWith] = useState(0);
  const number = total >= 7 ? 7 : total;
  const rest = total - number;
  const currentCoeff = 5 * startWith;

  const changePortion = idx => {
    setCurrentPage(idx);
    onClick(idx);
  };

  const changeList = direction => {
    setStartWith(prevState => {
      if (direction === 'back') {
        changePortion((prevState - 1) * 5);
        return prevState - 1;
      }
      if (prevState >= total / 5) {
        return prevState;
      }
      changePortion((prevState + 1) * 5);
      return prevState + 1;
    });
  };

  const setLastPage = () => {
    changePortion(total - 1);
    setStartWith(total / 5 - 1);
  };
  const elements = Array(
    !rest ? number : total - currentCoeff > 5 ? 5 : total - currentCoeff
  )
    .fill(0)
    .map((_, idx) => (
      <li
        className={
          currentPage === idx + currentCoeff ? styles.itemActive : styles.item
        }
        key={`key-${idx}`}
        onClick={() => changePortion(idx + currentCoeff)}
      >
        {idx + 1 + currentCoeff}
      </li>
    ));

  return (
    <div className={styles.general}>
      {Boolean(rest) && Boolean(startWith) && (
        <div className={styles.svgLeft} onClick={() => changeList('back')}>
          <SVGCreator iconName="arrowLeft" width={18} height={18} />
        </div>
      )}
      <ul className={styles.list}>
        {elements}
        {Boolean(rest) &&
          startWith + 1 < total / 5 &&
          currentPage !== total - 1 && (
            <li
              className={styles.empty}
              onClick={() => changeList('forward')}
            ></li>
          )}
        {Boolean(rest) &&
          startWith + 1 < total / 5 &&
          currentPage !== total - 1 && (
            <li
              className={
                currentPage === total - 1 ? styles.itemActive : styles.item
              }
              //   onClick={() => changePortion(total - 1)}
              onClick={setLastPage}
            >
              {total}
            </li>
          )}
      </ul>
      {Boolean(rest) && startWith + 1 < total / 5 && currentPage !== total - 1 && (
        <div className={styles.svgRight} onClick={() => changeList('forward')}>
          <SVGCreator iconName="arrowRight" width={18} height={18} />
        </div>
      )}
    </div>
  );
};

export default Pagination;
