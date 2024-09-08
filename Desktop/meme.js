document.getElementById('meme-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const imageUrl = document.getElementById('image-url').value;
    const topText = document.getElementById('top-text').value;
    const bottomText = document.getElementById('bottom-text').value;
    
    if (imageUrl && topText && bottomText) {
        const memeContainer = document.getElementById('meme-container');
        
        const memeDiv = document.createElement('div');
        memeDiv.classList.add('meme');
        
        memeDiv.innerHTML = `
            <img src="${imageUrl}" alt="Meme Image">
            <p class="top-text">${topText}</p>
            <p class="bottom-text">${bottomText}</p>
            <button onclick="this.parentNode.remove()">Remove</button>
        `;
        
        memeContainer.appendChild(memeDiv);
        
        document.getElementById('image-url').value = '';
        document.getElementById('top-text').value = '';
        document.getElementById('bottom-text').value = '';
    } else {
        alert('Please fill out all fields.');
    }
});