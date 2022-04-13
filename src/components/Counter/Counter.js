import styles from './Counter.module.scss';

const Counter = ({ time }) => {
  const formatTime = miliseconds => {
    return miliseconds;
  };

  return (
      <div className={styles.component}>{formatTime(time)}</div>
  );
};

export default Counter;