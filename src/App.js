import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import SocialMediaColumn from './components/SocialMediaColumn';
import LightThemeGif from "./components/LightThemeGif";

function App() {
    const [theme, setTheme] = useState('dark'); // Default to dark theme

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <div className={`App ${theme}`}>
            {theme === 'light' && (
                <div className="light-overlay">
                    <LightThemeGif />
                    <p className="funny-message">The light! It burns! Make it stop!</p>
                    <button className="big-switch" onClick={toggleTheme}>
                        🌙 Back to dark.
                    </button>
                </div>
            )}
            <Navigation toggleTheme={toggleTheme} theme={theme}/>
            <SocialMediaColumn/>
            {theme === 'dark' && (
                <main className="content">
                    <section id="home">
                        <h1>Hi, I'm Karolina</h1>
                        <p>FRONTEND DEVELOPER</p>
                    </section>
                    <section id="experience">
                        <h2>Experience</h2>
                        <p>Here's my experience</p>
                    </section>
                    <section id="portfolio">
                        <h2>Portfolio</h2>
                        <p>A list of my amazing projects.</p>
                    </section>
                    <section id="contact">
                        <h2>Contact</h2>
                        <p>Get in touch with me!</p>
                    </section>
                </main>
            )}
        </div>
    );
}

export default App;
