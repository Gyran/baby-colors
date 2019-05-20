import React, {useState, useCallback} from 'react';

const HEX_MIN = 0;
const HEX_MAX = 255;
const randomHex = (): string => {
  return (Math.floor(Math.random() * HEX_MAX) + HEX_MIN).toString(16);
}
const randomColor = (): string => {
  const r = randomHex();
  const g = randomHex();
  const b = randomHex();

  return `#${r}${g}${b}`;
}

const INITIAL_COLOR = randomColor();

const App: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState(INITIAL_COLOR);

  const handleTouchStart = useCallback((event) => {
    setBackgroundColor(randomColor())
  }, [setBackgroundColor]);

  return (
    <button 
      style={{
        backgroundColor,
      }}
      onTouchStart={handleTouchStart}
    >
      Baby colors
    </button>
  );
}

export default App;
