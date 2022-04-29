(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    backdrop: document.querySelector('.backdrop'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    window.addEventListener('keydown', onEscKeyPress);
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }

  refs.backdrop.addEventListener('click', onBackdropClick);

  function onBackdropClick(e) {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  }

  function onEscKeyPress(e) {
    if (e.code === 'Escape') {
      toggleModal();
      window.removeEventListener('keydown', onEscKeyPress);
    }
  }
})();
