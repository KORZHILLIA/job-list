import PropTypes from 'prop-types';
import JobsListItem from './JobsListItem';
import defineTerm from 'helpers/defineTerm';
import styles from './jobsList.module.css';

const JobsList = ({ items }) => {
  const elements = items.map(
    ({ id, pictures, name, title, location, updatedAt }) => {
      const { lat, long } = location;
      const term = defineTerm(updatedAt);
      return (
        <li className={styles.item} key={id}>
          <JobsListItem
            id={id}
            picture={pictures[0]}
            name={name}
            title={title}
            latitude={lat}
            longitude={long}
            term={term}
          />
        </li>
      );
    }
  );
  return <ul>{elements}</ul>;
};

JobsList.defaultProps = {
  items: [],
};

JobsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
      description: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      employment_type: PropTypes.arrayOf(PropTypes.string).isRequired,
      location: PropTypes.exact({
        lat: PropTypes.number.isRequired,
        long: PropTypes.number.isRequired,
      }).isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
      salary: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default JobsList;
