import { useState } from 'react';

type ExpensiveChildProps = {
    index: number;
    onClick: (index: number) => void;
};

function ExpensiveChild({ index, onClick } : ExpensiveChildProps) {
  return (
    <div 
      onClick={() => onClick(index)}
      style={{
        background: `hsl(${index * 10}, 70%, 50%)`,
        padding: 10,
        margin: 5
      }}
    >
      {index} - {Math.random().toString(36).slice(2, 8)}
    </div>
  );
}

export default function BunchOfStuff() {
  const [input, setInput] = useState('');
  const items = Array.from({ length: 50 }, (_, i) => i);

  const handleClick = (i : number) => console.log(i);

  return (
    <div style={{ padding: 20, border: '2px solid blue' }}>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
        {items.map(i => (
          <ExpensiveChild key={i} index={i} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
}