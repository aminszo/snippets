/**
 * Creates a snow effect by generating falling and drifting snowflakes.
 * Each snowflake is an animated `div` element styled and positioned randomly.
 *
 * tags: animation, visual-effect, dom, snow, js-snippet
 * source: copied - original source unknown
 */


(function () {
    const numberOfSnowflakes = 300;

    const createSnowflake = () => {
        const snowflake = document.createElement('div');
        snowflake.style.position = 'absolute';
        snowflake.style.width = `${Math.random() * 1.5 + 1}px`;
        snowflake.style.height = snowflake.style.width;
        snowflake.style.backgroundColor = 'white';
        snowflake.style.borderRadius = '50%';
        snowflake.style.zIndex = '9999';
        snowflake.style.pointerEvents = 'none';
        snowflake.style.opacity = Math.random() * 0.5 + 0.3;

        snowflake.style.boxShadow = `
      0 0 ${Math.random() * 2 + 1}px ${Math.random() * 2 + 1}px white,
      0 0 ${Math.random() * 2 + 1}px ${Math.random() * 2 + 1}px white
    `;

        snowflake.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;

        document.body.appendChild(snowflake);

        const startPositionX = Math.random() * window.innerWidth;
        const startPositionY = -Math.random() * window.innerHeight;
        const endPositionX = Math.random() * window.innerWidth;

        snowflake.style.left = `${startPositionX}px`;
        snowflake.style.top = `${startPositionY}px`;

        const driftAnimation = document.createElement('style');
        driftAnimation.innerHTML = `
      @keyframes drift {
        0% { left: ${startPositionX}px; }
        50% { left: ${startPositionX + (Math.random() * 60 - 30)}px; }
        100% { left: ${endPositionX}px; }
      }
      @keyframes fall {
        0% { top: ${startPositionY}px; }
        100% { top: ${window.innerHeight + 10}px; }
      }
    `;
        document.head.appendChild(driftAnimation);

        snowflake.addEventListener('animationiteration', () => {
            const newPositionY = -Math.random() * window.innerHeight;
            const newPositionX = Math.random() * window.innerWidth;
            snowflake.style.top = `${newPositionY}px`;
            snowflake.style.left = `${newPositionX}px`;
        });
    };

    for (let i = 0; i < numberOfSnowflakes; i++) {
        createSnowflake();
    }
})();
