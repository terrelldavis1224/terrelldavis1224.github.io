document.addEventListener('DOMContentLoaded', function() {
    var bio = document.getElementById("bio");
    var angle = 45;

    setInterval(function() {
        angle = (angle + 1) % 360; 
        bio.style.background = `-webkit-linear-gradient(${angle}deg, rgb(2, 2, 155), red)`;
        bio.style.backgroundClip = "text";
        bio.style.webkitBackgroundClip = "text";
    }, 10); 
});
