const images = document.querySelectorAll('.zoom-img');
const overlay = document.getElementById('overlay');
const zoomedImg = document.getElementById('zoomedImg');

images.forEach(img => {
    img.addEventListener('click', function() {
    const imgSrc = this.src;
    zoomedImg.src = imgSrc;
    overlay.style.display = 'flex';
    zoomedImg.style.display = 'block';
    });
});

overlay.addEventListener('click', function() {
    overlay.style.display = 'none';
    zoomedImg.style.display = 'none';
});