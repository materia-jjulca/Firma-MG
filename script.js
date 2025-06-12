document.getElementById('input-name').addEventListener('input', (e) => {
  document.querySelector('.name').textContent = e.target.value || 'Nombre Apellido';
});

document.getElementById('input-rol').addEventListener('input', (e) => {
  document.querySelector('.rol').textContent = e.target.value || 'Rol del Colaborador';
});

document.getElementById('input-number').addEventListener('input', (e) => {
  document.querySelector('.number').textContent = e.target.value || 'Teléfono del colaborador';
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
  setTimeout(() => toast.classList.remove('show'), 3000);
}