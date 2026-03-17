const form = document.querySelector('[data-demo-form]');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const toast = form.querySelector('.demo-toast');
    if (toast) {
      toast.style.display = 'block';
      toast.textContent = 'Preview form only: this site build is a stakeholder-facing prototype. Replace this with your live intake workflow later.';
    }
    form.reset();
  });
}
