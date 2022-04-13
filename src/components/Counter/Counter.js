import styles from './Counter.module.scss';

const Counter = props => {

  const formatTime = timeInSeconds => {
    let time = parseFloat(timeInSeconds).toFixed(3);
    let hour = Math.floor(time / 60 / 60);
    let minute = Math.floor(time / 60) % 60;
    let seconds = Math.floor(time - minute * 60);
    let milliseconds = time.slice(-2);

    hour = (hour < 10) 
      ? "0" + hour : 
      hour;
    minute = (minute < 10) 
      ? "0" + minute : 
      minute;
    seconds = (seconds < 10) 
      ? "0" + seconds : 
      seconds;

    return (
      hour + ":" + 
      minute + ":" + 
      seconds + "." + 
      milliseconds
    );
  };

  return (
      <div 
        className={styles.Counter}
      >
        {formatTime(props.children)}
      </div>
  );
};

export default Counter;