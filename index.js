const form = document.getElementById("battleForm");
const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

function validateField(id) {
    let field = document.getElementById(id);

    if (field.value.trim() === "") {
        field.classList.remove("valid");
        field.classList.add("invalid");
        return false;
    } else {
        field.classList.remove("invalid");
        field.classList.add("valid");
        return true;
    }
}

document.getElementById("name").addEventListener("input", () => validateField("name"));
document.getElementById("lang").addEventListener("change", () => validateField("lang"));
document.getElementById("exp").addEventListener("input", () => validateField("exp"));

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let ok1 = validateField("name");
    let ok2 = validateField("lang");
    let ok3 = validateField("exp");

    if (!ok1 || !ok2 || !ok3) {
        successMsg.textContent = "";
        errorMsg.textContent = "Please fix the highlighted fields!";
        return;
    }

    errorMsg.textContent = "";
    successMsg.textContent = "Your application has been submitted successfully!";

    successMsg.style.opacity = 0;
    setTimeout(() => {
        successMsg.style.transition = "0.5s";
        successMsg.style.opacity = 1;
    }, 50);

    form.reset();
    document.querySelectorAll("input, select").forEach(f => f.classList.remove("valid"));
});
