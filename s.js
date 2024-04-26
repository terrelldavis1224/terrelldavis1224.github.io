function createFloatingElement() {
    const floatingArea = document.getElementById('floatingArea');
    const types = ['triangle', 'circle', 'square', 'octagon', 'heart', 'star'];
    const type = types[Math.floor(Math.random() * types.length)];
    const symbols = {
        'triangle': '△',
        'circle': '◯',
        'square': '▢',
        'octagon': '⬡',
        'heart': '♡',
        'star': '✧'
    };

    const elem = document.createElement('div');
    elem.className = type;
    elem.textContent = symbols[type];
    elem.style.position = 'absolute';
    elem.style.left = `${Math.random() * window.innerWidth}px`;
    elem.style.bottom = '-50px';
    const rotationDegree = Math.random() * 720 - 360; 
    elem.style.transform = `rotate(${rotationDegree}deg)`;
    

    floatingArea.appendChild(elem);

    // Animation of the element
    setTimeout(() => {
        elem.style.transition = 'bottom 10s ease-out';
        elem.style.bottom = '100vh';
    }, 1000);

    // Remove the element after it moves out of view
    setTimeout(() => {
        floatingArea.removeChild(elem);
    }, 10100);
}

setInterval(createFloatingElement, 500);

