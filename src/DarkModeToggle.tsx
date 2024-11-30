import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkModeToggle = ({ 
  onChange, 
  initialMode = 'light', 
  className = '',
  iconSize = 18,
  trackColor = {
    light: '#e0e0e0',
    dark: '#2c2c2c'
  },
  thumbColor = {
    light: 'white',
    dark: '#4a4a4a'
  }
}) => {
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    // Apply dark mode to document body
    document.body.classList.toggle('dark-mode', mode === 'dark');
    
    // Call optional onChange prop
    if (onChange) {
      onChange(mode);
    }
  }, [mode, onChange]);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
  };

  return (
    <div 
      className={`dark-mode-toggle relative inline-flex items-center cursor-pointer ${className}`}
      onClick={toggleMode}
    >
      <div 
        className="toggle-track w-16 h-8 rounded-full relative transition-colors duration-300"
        style={{ 
          backgroundColor: mode === 'light' ? trackColor.light : trackColor.dark 
        }}
      >
        <div 
          className="toggle-thumb absolute top-1 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center"
          style={{
            left: mode === 'light' ? '4px' : '36px',
            backgroundColor: mode === 'light' ? thumbColor.light : thumbColor.dark
          }}
        >
          {mode === 'light' ? (
            <Sun color="#ffd700" size={iconSize} />
          ) : (
            <Moon color="#fff" size={iconSize} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DarkModeToggle;