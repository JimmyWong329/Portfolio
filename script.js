 document.querySelectorAll('.image-gallery img').forEach(image => {
    image.addEventListener('click', () => {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        const popupImage = document.createElement('img');
        popupImage.src = image.src;
        popup.appendChild(popupImage);
        document.body.appendChild(popup);
        popup.addEventListener('click', () => popup.remove());
    });
});
