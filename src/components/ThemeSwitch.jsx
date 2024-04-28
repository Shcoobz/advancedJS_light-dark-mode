import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

/**
 * ThemeSwitch provides a toggle for switching between light and dark themes.
 * It uses local storage to persist the user's theme preference across sessions.
 */
function ThemeSwitch() {
  /**
   * @const {boolean} isDark - Tracks whether the dark mode is enabled.
   */
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');

  /**
   * Effect that updates the theme attribute and local storage whenever isDark changes.
   */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  /**
   * Handles the state change of the theme toggle switch.
   */
  function handleToggle() {
    setIsDark(!isDark);
  }

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
