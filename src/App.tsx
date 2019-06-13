import React, { useState, useCallback } from 'react';

const INITIAL_COLOR = 'white';

const App: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState(INITIAL_COLOR);
  const [canUseTouch, setCanUseTouch] = useState(false);

  const setRandomColor = useCallback(async () => {
    const { randomColor } = await import('./randomColor');
    setBackgroundColor(randomColor())
  }, [setBackgroundColor])

  const handleTouchStart = useCallback((e) => {
    setCanUseTouch(true)
    setRandomColor()
  }, [setRandomColor]);

  const handleOnMouseDown = useCallback(() => {
    if (!canUseTouch) {
      setRandomColor()
    }
  }, [canUseTouch, setRandomColor]);

  return (
    <button
      style={{
        backgroundColor,
      }}
      onTouchStart={handleTouchStart}
      onMouseDown={handleOnMouseDown}
    >
      Baby colors
    </button>
  );
}

export default App;
