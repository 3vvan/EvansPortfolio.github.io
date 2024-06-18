document.addEventListener('DOMContentLoaded', () => {
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');
    
    dropdownButtons.forEach(button => {
        button.addEventListener('click', () => {
            const dropdownContent = button.nextElementSibling;
            const isOpen = dropdownContent.style.display === 'block';
            
            dropdownButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.nextElementSibling.style.display = 'none';
            });

            if (!isOpen) {
                button.classList.add('active');
                dropdownContent.style.display = 'block';
            } else {
                button.classList.remove('active');
                dropdownContent.style.display = 'none';
            }
        });
    });

    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    });

    window.addEventListener('focus', () => {
        document.body.classList.remove('blurred');
    });
    
    window.addEventListener('blur', () => {
        document.body.classList.add('blurred');
    });
    
    const modal = document.createElement('div');
    modal.classList.add('image-modal');
    document.body.appendChild(modal);

    const modalImg = document.createElement('img');
    modal.appendChild(modalImg);

    images.forEach(img => {
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modal.classList.add('active');
        });
    });

    modal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modalImg.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
    
    console.log('Portfolio website is loaded and ready!');
});