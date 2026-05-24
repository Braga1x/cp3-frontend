document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

  
    let cartCount = 0;
    const cartCountSpan = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            cartCount++;
            if (cartCountSpan) {
                cartCountSpan.textContent = cartCount;
                
                
                const originalText = button.textContent;
                button.textContent = "Adicionado! ✓";
                button.style.backgroundColor = "#2E7D32";
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.backgroundColor = "";
                }, 1000);
            }
        });
    });

 
    const contactForm = document.getElementById("gamer-contact-form");
    const formFeedback = document.getElementById("form-feedback");

    if (contactForm && formFeedback) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

           
            const nomeInput = document.getElementById("nome").value.trim();
            const emailInput = document.getElementById("email").value.trim();
            const descricaoInput = document.getElementById("descricao").value.trim();

            if (nomeInput && emailInput && descricaoInput) {
                
                formFeedback.classList.remove("hidden");
                formFeedback.classList.add("success");
                formFeedback.textContent = `Obrigado, ${nomeInput}! Transmissão recebida com sucesso. Responderemos em até 24h.`;

                
                contactForm.reset();

               
                setTimeout(() => {
                    formFeedback.classList.add("hidden");
                    formFeedback.classList.remove("success");
                    formFeedback.textContent = "";
                }, 5000);
            }
        });
    }
});