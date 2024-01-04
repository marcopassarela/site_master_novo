if (!localStorage.getItem("cookiesAccepted")) {
                var cookieMessage = document.getElementById('cookie-notification');
                var closeCookie = document.getElementById('cookie-notification-close');

                cookieMessage.style.display = 'block';
                closeCookie.addEventListener("click", function (e) {
                    e.preventDefault();
                    localStorage.setItem("cookiesAccepted", true);

                    cookieMessage.style.display = 'none';
                });
            }

document.addEventListener("DOMContentLoaded", function () {
    const outrosLink = document.getElementById("outrosLink");
    const menu2 = document.getElementById("menu2");

    outrosLink.addEventListener("click", function (event) {
        event.preventDefault();

        if (menu2.classList.contains("ativo")) {
            menu2.style.height = "0";
            menu2.style.opacity = "0";
            setTimeout(() => {
                menu2.classList.remove("ativo");
            }, 1000); // Tempo igual à duração da transição
        } else {
            menu2.classList.add("ativo");
            setTimeout(() => {
                menu2.style.height = "5vh";
                menu2.style.opacity = "1";
            }, 0); // Adiciona um pequeno atraso para garantir que a transição CSS seja aplicada
        }
    });
});

