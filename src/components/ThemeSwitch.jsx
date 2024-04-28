import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function ThemeSwitch() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <div className='theme-switch-wrapper'>
      <span id='toggle-icon'>
        <span className='toggle-text'>{isDark ? 'Dark Mode' : 'Light Mode'}</span>
        <FontAwesomeIcon icon={isDark ? faMoon : faSun} />
      </span>
      <label className='theme-switch'>
        <input type='checkbox' checked={isDark} onChange={handleToggle} />
        <div className='slider round'></div>
      </label>
    </div>
  );
}

export default ThemeSwitch;
