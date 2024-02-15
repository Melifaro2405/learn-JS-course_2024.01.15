import classNames from 'classnames';
import styles from './styles.module.scss';

export const Button = ({ children, className, ...props }) => {
  return (
    <button className={classNames(styles.root, className)} {...props}>
      {children}
    </button>
  );
};
