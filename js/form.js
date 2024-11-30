const btn = document.querySelector(".form-btn");
if(btn) {
    btn.addEventListener('click', () => {
        alert(document.forms.contact.checkValidity() ? "Message sent!" : "Fill all the requeired information.");
    });
}


