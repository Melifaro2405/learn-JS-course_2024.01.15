import classNames from 'classnames';
import styles from '../RestaurantTabs/styles.module.scss';

export const Tab = ({ title, onClick, isActiveTab }) => {
  return (
    <div
      className={classNames(styles.tab, {
        [styles.active]: isActiveTab,
      })}
      onClick={onClick}
    >
      {title}
    </div>
  );
};
