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
    elem.style.bottom = '-100px';  
    floatingArea.appendChild(elem);    
    const rotationDegree = Math.random() * 720 - 360; 
    elem.style.transform = `rotate(${rotationDegree}deg)`;
    

    floatingArea.appendChild(elem);

    setTimeout(() => {
        elem.style.transition = 'bottom 10s ease-out';
        elem.style.bottom = '100vh';
    }, 1000);

setTimeout(() => {
    floatingArea.removeChild(elem);
}, 11000); // 11 seconds
}

setInterval(createFloatingElement, 500);

