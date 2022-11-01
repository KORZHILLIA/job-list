import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SVGCreator from 'shared/components/SVGCreator';
import IconGenerator from 'shared/components/IconGenerator';
import { fetchCityName } from 'shared/api/geo-api';
import useBreakpoints from 'shared/hooks/useBreakpoints';
import styles from './jobsListItem.module.css';

const JobsListItem = ({
  id,
  picture,
  name,
  title,
  latitude,
  longitude,
  term,
}) => {
  const [state, setState] = useState('');
  const { bigger1920px } = useBreakpoints();

  useEffect(() => {
    const getCityName = async (lat, long) => {
      try {
        const city = await fetchCityName(lat, long);
        setState(city);
      } catch (error) {
        setState(error.message);
      }
    };
    getCityName(latitude, longitude);
  }, [latitude, longitude]);

  const rating = (
    <IconGenerator
      number={5}
      iconName="star"
      width={bigger1920px ? 18 : 10}
      height={bigger1920px ? 18 : 10}
      listStyle={styles.rating}
      iconStyle={styles.star}
    />
  );

  return (
    <Link to={`/jobs/${id}`}>
      {!bigger1920px ? (
        <div className={styles.upper}>
          {rating}
          <span className={styles.posted}>Posted {term} ago</span>
        </div>
      ) : (
        rating
      )}
      <div className={styles.meta}>
        <img
          className={styles.img}
          src={picture}
          alt={name}
          width={bigger1920px ? '85' : '66'}
          height={bigger1920px ? '85' : '66'}
        />
        <div className={styles.info}>
          <div className={styles.title}>
            <p className={styles.titleText}>{title}</p>
            {bigger1920px && (
              <div className={styles.bookmark}>
                <SVGCreator iconName="bookmark" />
              </div>
            )}
          </div>
          <p>
            <span className={styles.department}>Department name • </span>
            <span className={styles.department}>{name}</span>
          </p>
          <div className={styles.location}>
            <div>
              <SVGCreator iconName="location" width={13} height={18} />
              <span className={styles.place}>{state}</span>
            </div>
            {bigger1920px && <span>Posted {term} ago</span>}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobsListItem;
