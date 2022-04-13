import { useState } from "react";
import Counter from "./components/Counter/Counter";

const App = () => {

  const [time, setTime] = useState(0);
  const [interval, setInterval] = useState(null);

  return (
    <Counter />
  );
};

export default App;