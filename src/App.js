import { useState } from "react";
import Container from "./components/Container/Container";
import Counter from "./components/Counter/Counter";
import Button from "./components/Button/Button";

const App = () => {

  const [time, setTime] = useState(0);
  const [interval, setInterval] = useState(null);

  return (
    <Container>
      <Counter />
      <Button>Start</Button>
      <Button>Stop</Button>
      <Button>Reset</Button>
    </Container>
  );
};

export default App;