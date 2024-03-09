import { useState, useEffect } from 'react'

let i = 0;
const Test = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timer = null
    setInterval(() => {
      setCount(count => count+1);
    }, 1000);
    return () => { timer = true }
  }, []);

  console.log(`${++i} - ${count}`);
  return <span>{`${i} - ${count}`}</span>;
};
function App() {
  return (
    <Test/>
  );
}

export default App;
