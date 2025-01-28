document.querySelector('.video-thumbnail').addEventListener('click', function () {
    const embed = document.querySelector('.video-embed');
    const thumbnail = document.querySelector('.video-thumbnail');

    // Adiciona o iframe com autoplay na URL
    embed.innerHTML = `
        <iframe 
            src="https://www.youtube.com/embed/-ff0lXpkfsU?autoplay=1" 
            title="Vídeo explicando produto e com chamada para compra" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;

    // Esconde a capa e exibe o iframe
    thumbnail.style.display = 'none';
    embed.style.display = 'block';
});
