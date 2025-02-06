function generateUrl() {
    const channelId = document.getElementById('channelId').value.trim();
    const resultDiv = document.getElementById('playlistLink');
    
    if (!channelId) {
        resultDiv.innerHTML = '<p class="error">Please enter a channel ID</p>';
        return;
    }
    
    if (!channelId.startsWith('UC')) {
        resultDiv.innerHTML = '<p class="error">Channel ID must start with UC</p>';
        return;
    }
    
    const playlistId = channelId.replace('UC', 'UU');
    const playlistUrl = `https://www.youtube.com/playlist?list=${playlistId}`;
    
    resultDiv.innerHTML = `
        <p>🎉 Here's your playlist link:</p>
        <a href="${playlistUrl}" target="_blank">${playlistUrl}</a>
        <p class="copy-hint">Click the link to open or copy it from your browser's address bar</p>
    `;
}

document.getElementById('channelId').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        generateUrl();
    }
});
