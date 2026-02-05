import { useState, useEffect } from 'react';

type DataItem = {
    id: number;
    val: number;
}


export default function OtherStuffAlsoComplicated() {
  const [text, setText] = useState('');
  const [data, setData] = useState<DataItem[] | []>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(prev => [...prev, { id: Date.now(), val: Math.random() }].slice(-200));
    }, 300);
    return () => clearTimeout(timer);
  }, [text]);

  const filtered = data.filter(d => d.val > 0.5);
  const sorted = filtered.sort((a, b) => b.val - a.val);
  const total = sorted.reduce((s, d) => s + d.val, 0);

  return (
    <div style={{ padding: 20, border: '2px solid green' }}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>{total.toFixed(2)} - {sorted.length} items</p>
      {sorted.slice(0, 10).map(d => (
        <div key={d.id}>{d.val.toFixed(3)}</div>
      ))}
    </div>
  );
}