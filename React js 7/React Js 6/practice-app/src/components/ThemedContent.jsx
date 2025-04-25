import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`content ${theme}`}>
      <h2>{theme === 'light' ? 'Light Theme' : 'Dark Theme'} Active</h2>
      <p>This content adjusts based on the theme selected.</p>
    </div>
  );
}

export default ThemedContent;
