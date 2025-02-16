```javascript
import { useRef, useEffect, useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const cleanupRef = useRef(null);

  useEffect(() => {
    cleanupRef.current = () => {
      console.log('Component unmounting');
    };
    console.log('Component mounted');
    return cleanupRef.current;
  }, []);

  useEffect(() => {
    return () => {
      cleanupRef.current?.();
    };
  }, [count]); // Run cleanup when count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```