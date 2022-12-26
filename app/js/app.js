const links = document.querySelectorAll("a[href='#']");
links.forEach(link => link.addEventListener("click", (e) => {
    e.preventDefault();
}));

const form = document.querySelector(".form");
const email = document.querySelector(".email");
const error = document.querySelector(".error");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = email.value;
    error.style.display = "none";
    email.classList.remove("invalid");

    if (value === "" && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) === false) {
        error.style.display = "block";
        email.classList.add("invalid");
    } else {
        email.value = "";
    }
});