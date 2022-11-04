import PropTypes from 'prop-types';
import styles from './additionalInfo.module.css';

const AdditionalInfo = ({ benefits, employmentTypes }) => {
  const benefitsElements = benefits.map((benefit, idx) => (
    <li key={`${benefit}-${idx}`}>
      <p className={styles.benefit}>{benefit}</p>
    </li>
  ));
  const typesElements = employmentTypes.map((type, idx) => (
    <li key={`${type}-${idx}`}>
      <p className={styles.type}>{type}</p>
    </li>
  ));

  return (
    <div className={styles.general}>
      <h3 className={styles.header}>Additional info</h3>
      <h4 className={styles.subheader}>Employment type</h4>
      <ul className={styles.typeList}>{typesElements}</ul>
      <h4 className={styles.subheader}>Benefits</h4>
      <ul className={styles.benefitList}>{benefitsElements}</ul>
    </div>
  );
};

AdditionalInfo.defaultProps = {
  benefits: [],
  employmentTypes: [],
};

AdditionalInfo.propTypes = {
  benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
  employmentTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AdditionalInfo;
