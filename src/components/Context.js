import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const setDarkTheme = () => {
    setTheme('dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
