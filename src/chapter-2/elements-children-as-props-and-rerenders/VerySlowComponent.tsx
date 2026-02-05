import { useState, useEffect } from 'react';

function VerySlowComponent() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => setCount(c => c + 1), 100);
    console.log('rerenders');
    return () => clearInterval(interval);
  }, []);

  const start = performance.now();
  while (performance.now() - start < 50) {}
  
  const expensive = Array.from({ length: 5000 }, (_, i) => i)
    .reduce((a, v) => a + Math.pow(v, 2), 0);

  return (
    <div style={{ padding: 20, border: '2px solid red' }}>
      <h3>Very Slow</h3>
      <p>{count} - {expensive.toString().slice(0, 10)}</p>
    </div>
  );
}

export default VerySlowComponent;