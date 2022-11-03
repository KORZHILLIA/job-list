import styles from './jobImages.module.css';

const JobImages = ({ images, alt }) => {
  const elements = images.map((image, idx) => (
    <li key={`${image}-${idx}`}>
      <img
        className={styles.item}
        src={image}
        alt={alt}
        width={209}
        height={115}
      />
    </li>
  ));
  return (
    <div className={styles.general}>
      <h3 className={styles.subheader}>Attached Images</h3>
      <ul className={styles.list}>{elements}</ul>
    </div>
  );
};

export default JobImages;
