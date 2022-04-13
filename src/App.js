import { useState } from "react";

const App = () => {

  const [time, setTime] = useState(0);
  const [interval, setInterval] = useState(null);

  return (
    <h1>Hello world</h1>
  );
};

export default App;