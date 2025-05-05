function createContactForm() {
    const formHTML = `
    <main id="main">
        <div class="Acontainer d-flex justify-content-center align-items-center" style="height: 100vh;">
            <div class="Acontact-box  p-4 shadow" style="width: 100%; max-width: 850px;">
                <h2 class="text-center mytitle2">Contactez nous!</h2>
                <form>
                    <div class="mb-3">
                        <input type="text" class="form-control Afield" placeholder="Entrez votre nom..." required>
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control Afield" placeholder="Entrez votre email..." required>
                    </div>
                    <div class="mb-3">
                        <input type="tel" class="form-control Afield" placeholder="Entrez votre numero de téléphone..." required>
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control Afield" rows="5" placeholder="Entrez votre message..." required></textarea>
                    </div>
                    <button type="submit" class="Abtn btn-success w-100">Envoyer</button> <!-- w-100 pour largeur pleine -->
                </form>
            </div>
        </div>
    </main>
    `;
    document.body.innerHTML = formHTML;
}

createContactForm();



