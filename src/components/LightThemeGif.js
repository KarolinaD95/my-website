import React, { useEffect } from 'react';

function LightThemeGif() {
    useEffect(() => {
        // Dynamically load the Tenor embed script
        const script = document.createElement('script');
        script.src = 'https://tenor.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        // Clean up script on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="gif-container">
            <div
                className="tenor-gif-embed"
                data-postid="2156227205388100269"
                data-share-method="host"
                data-aspect-ratio="1"
                data-width="100%"
            >
                <a href="https://tenor.com/view/cartoon-light-shine-panda-bright-gif-2156227205388100269">
                    Cartoon Light GIF
                </a>{' '}
                from{' '}
                <a href="https://tenor.com/search/cartoon-gifs">Cartoon GIFs</a>
            </div>
        </div>
    );
}

export default LightThemeGif;
