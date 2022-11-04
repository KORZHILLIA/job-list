import { memo } from 'react';
import PropTypes from 'prop-types';
import SVGCreator from 'shared/components/SVGCreator';
import useBreakpoints from 'shared/hooks/useBreakpoints';
import styles from './personalActivity.module.css';

const PersonalActivity = ({ id }) => {
  const { bigger1920px } = useBreakpoints();
  const saveToListIcon = bigger1920px ? 'bookmark' : 'star-big';
  const saveToListIconWidth = bigger1920px ? 32 : 21;
  const saveToListIconHeight = bigger1920px ? 32 : 20;
  const shareIconWidth = bigger1920px ? 32 : 18;
  const shareIconHeight = bigger1920px ? 32 : 20;

  return (
    <div className={styles.general}>
      <div className={styles.saveToList}>
        <div className={styles.saveToListIcon}>
          <SVGCreator
            iconName={saveToListIcon}
            width={saveToListIconWidth}
            height={saveToListIconHeight}
          />
        </div>
        <span>Save to my list</span>
      </div>
      <div className={styles.share}>
        <div className={styles.shareIcon}>
          <SVGCreator
            iconName="share"
            width={shareIconWidth}
            height={shareIconHeight}
          />
        </div>
        <span>Share</span>
      </div>
    </div>
  );
};

PersonalActivity.propTypes = {
  id: PropTypes.string,
};

export default memo(PersonalActivity);
