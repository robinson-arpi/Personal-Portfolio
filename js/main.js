const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.transform = `translate(${x - 1}px, ${y - 1}px)`;
});