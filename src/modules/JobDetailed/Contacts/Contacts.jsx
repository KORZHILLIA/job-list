import PropTypes from 'prop-types';
import SVGCreator from 'shared/components/SVGCreator';
import styles from './contacts.module.css';

const Contacts = ({ name, address, email, phone }) => {
  return (
    <div className={styles.general}>
      <div className={styles.department}>
        <p>Department name.</p>
        <p>{name}</p>
      </div>
      <div className={styles.address}>
        <div className={styles.location}>
          <SVGCreator iconName="location" width={13} height={19} />
        </div>
        <p className={styles.addressText}>{address}</p>
      </div>
      <div className={styles.phone}>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

Contacts.defaultProps = {
  name: '',
  address: '',
  email: '',
  phone: '',
};

Contacts.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Contacts;
