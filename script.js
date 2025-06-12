document.getElementById('save-btn').addEventListener('click', () => {
    const name = document.getElementById('input-name').value.trim();
    const rol = document.getElementById('input-rol').value.trim();
    const number = document.getElementById('input-number').value.trim();

    if (!name && !rol && !number) {
        showEmptyToast();
        return;
    }

    if (name) document.querySelector('.name').textContent = name;
    if (rol) document.querySelector('.rol').textContent = rol;
    if (number) document.querySelector('.number').textContent = number;
});

document.getElementById('clear-btn').addEventListener('click', () => {
    document.getElementById('input-name').value = '';
    document.getElementById('input-rol').value = '';
    document.getElementById('input-number').value = '';
});

document.getElementById('copy-btn').addEventListener('click', async () => {
    const card = document.getElementById('card');

    html2canvas(card).then(async (canvas) => {
        canvas.toBlob(async (blob) => {
            try {
                await navigator.clipboard.write([
                    new ClipboardItem({ 'image/png': blob })
                ]);
                showToast();
            } catch (err) {
                console.error('Error al copiar la imagen:', err);
                alert('Tu navegador no permite copiar imágenes al portapapeles.');
            }
        }, 'image/png');
    });
});

function showToast() {
    const toast = document.getElementById('copy-toast');
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function showEmptyToast() {
    const toast = document.getElementById('empty-toast');
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}