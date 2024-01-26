import styles from './styles.module.scss';
import classNames from 'classnames';

export const Button = ({ children, className, ...props }) => {
  return (
    <button className={classNames(styles.root, className)} {...props}>
      {children}
    </button>
  );
};
