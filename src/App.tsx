import React, {useState, useCallback} from 'react';

const INITIAL_COLOR = 'white';

const App: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState(INITIAL_COLOR);

  const handleTouchStart = useCallback(async () => {
    const { randomColor } = await import('./randomColor');
    setBackgroundColor(randomColor())
  }, [setBackgroundColor]);

  return (
    <button 
      style={{
        backgroundColor,
      }}
      onTouchStart={handleTouchStart}
    >
      Baby colors testing
    </button>
  );
}

export default App;
