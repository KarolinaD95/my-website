import React from 'react';

function Navigation({ toggleTheme, theme }) {
    return (
        <nav className="navigation">
            <p className="website-name">Karolina</p>
            <ul>
                <li><a href="#home">// home</a></li>
                <li><a href="#experience">// experience</a></li>
                <li><a href="#portfolio">// portfolio</a></li>
                <li><a href="#contact">// contact</a></li>
            </ul>
            <button className="theme-toggle" onClick={toggleTheme}>
                {theme === 'dark' ? '☀️' : '🌙'}
            </button>
        </nav>
    );
}

export default Navigation;
