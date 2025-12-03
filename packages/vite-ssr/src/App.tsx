import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Vite + React SSR + TS</h1>
      <p>Это минимальный пример серверного рендера с TypeScript.</p>
      <button type="button" onClick={() => setCount((n) => n + 1)}>
        Кликнули {count} раз
      </button>
    </main>
  );
}
