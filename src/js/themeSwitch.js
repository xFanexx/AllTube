document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = `${savedTheme}-mode`;
    document.getElementById('theme-style').href = `src/css/${savedTheme}-mode.css`;
    
    updateThemeAwareImages(savedTheme);
});

document.getElementById('themeToggle').addEventListener('click', () => {
    const currentTheme = document.body.className.includes('light') ? 'light' : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.body.className = `${newTheme}-mode`;
    
    document.getElementById('theme-style').href = `src/css/${newTheme}-mode.css`;
    
    localStorage.setItem('theme', newTheme);
    
    updateThemeAwareImages(newTheme);
});

function updateThemeAwareImages(theme) {
    const themeAwareImages = document.querySelectorAll('.theme-aware-image');
    themeAwareImages.forEach(img => {
        img.src = img.dataset[`${theme}Src`];
    });
}
