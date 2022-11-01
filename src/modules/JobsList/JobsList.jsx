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

export default JobsList;
