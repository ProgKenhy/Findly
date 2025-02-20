// ColorModeContext.tsx
import React, { createContext, useState } from 'react';

export const ColorModeContext = createContext<{
  colorMode: 'light' | 'dark';
  toggleColorMode: () => void;
}>({
  colorMode: 'light',
  toggleColorMode: () => {},
});

export const ColorModeProvider: React.FC = ({ children }) => {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');

  const toggleColorMode = () => {
    setColorMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
