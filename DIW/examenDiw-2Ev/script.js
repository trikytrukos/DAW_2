document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('color-toggle').addEventListener('click', function() {
    const colorClass = 'color-' + Math.floor(Math.random() * 10 + 1);
    document.body.className = ''; 
    document.body.classList.add(colorClass);
});
