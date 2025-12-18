
import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (count !== 0 && count % 3 === 0) {
      alert(`The current number ${count} is divisible by 3`);
    }

    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 300);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="counter-card">
      <h2>Animated Counter</h2>
      <div className={`counter ${animate ? "bump" : ""}`}>
        {count}
      </div>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}
