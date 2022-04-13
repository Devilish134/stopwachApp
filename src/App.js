import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import Counter from "./components/Counter/Counter";
import Button from "./components/Button/Button";

const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const reset = () => {
    setTime(0);
    setTimer(null);
  };

  const start = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 0.01);
    }, 10))
  };

  const stop = () => {
    clearInterval(timer);
    setTimer();
  }

  useEffect(() => {
    return () => {
       if(timer) clearInterval(timer);
    };
  }, []);

  return (
    <Container>
      <Counter>{time}</Counter>
      <Button value={start}>Start</Button>
      <Button value={stop}>Stop</Button>
      <Button value={reset}>Reset</Button>
    </Container>
  );
};

export default App;