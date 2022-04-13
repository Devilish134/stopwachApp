import { useState } from "react";
import Container from "./components/Container/Container";
import Counter from "./components/Counter/Counter";

const App = () => {

  const [time, setTime] = useState(0);
  const [interval, setInterval] = useState(null);

  return (
    <Container>
      <Counter />
    </Container>
  );
};

export default App;