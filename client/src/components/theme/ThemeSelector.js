import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

export default function ThemeSelector() {
    const { theme, onThemeChange } = useContext(ThemeContext);

    return (
        <select value={theme} onChange={onThemeChange}>
            <option value='default'>default</option>
            <option value='theme1'>theme1</option>
            <option value='theme2'>theme2</option>
        </select>
    );
}
