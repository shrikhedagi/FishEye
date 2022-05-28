class ContactForm 
{    

    constructor(all) 
    {
        this._all = all
    } 

    renderContactForm() 
    {
        const form = document.createElement('aside');
        form.setAttribute('id', 'contact-form-container');
        form.classList.add('sr-container');
        form.classList.add('formOverlay');
        form.classList.add('role', 'dialog');
        form.setAttribute('aria-hidden', 'false');
        form.innerHTML = `
        <div class="form-content" aria-labelledby="dialog-headline" tabindex="-1">
            <header aria-hidden="false" class="form-header">
                <h2 id="modal-title" class="form-header__heading">
                    Contactez-moi
                    <br />
                    ${this._all.name}
                </h2>
                <button class="form-header__close" aria-label="Close Contact form" id="close-cross-btn">
                    <img aria-hidden="true" class="contact-button" src="./assets/icons/close.svg" alt="Fermeture de la modale"/>
                </button>
            </header>
            <form action="#" method="post" id="contactForm" aria-hidden="true" class="contact-form sr-container" novalidate>
                 <div id="contactDataFirstName" class="contactData">
                    <label class="contactData__label">Prénom</label>
                    <input type"text" class="contactData__input" placeholder="David" aria-label="First name" id="firstName" required/>
                </div>
                <div id="contactDataLastName" class="contactData">
                    <label for="last-name" class="contactData__label">Nom</label>
                    <input type"text" class="contactData__input" placeholder="Green" aria-label="Last name" id="lastName" required/>
                </div>
                <div id="contactDataEmail" class="contactData contactData__email">
                    <label class="contactData__label">Email</label>
                    <input type="email" class="contactData__input" aria-label="Email" id="email" placeholder="david-green@gmail.com" required/>
                </div>
                <div id="contactDataMessage" class="contactData contactData__message">
                    <label class="contactData__label">Votre message</label>
                    <textarea cols="30" rows="10" class="text-area" aria-label="Your message" placeholder="Veuillez écrire votre message dans ce champs." id="message" required></textarea>
                </div>
                <button type="submit" class="button contact-button" id="submit" aria-label="Send" formnovalidate>Envoyer</button>
            </form>
        </div>`;

        // Launch Contact Form - Event 
        const formBtn = document.querySelectorAll(".contact-button");
        formBtn.forEach((btn) => btn.addEventListener("click", launchForm));
        
        launchForm() 
        {
            const modal = document.getElementById("contact-form");
            modal.style.display = "flex";
            modal.classList.remove('sr-container');
        }

        const modalContent = document.getElementById("contact-form").querySelector(".form-content");
        document.getElementById("contact-form").classList.remove("modal--close");
        document.body.classList.toggle("main-wrapper--modal-open");

        return form;

    }  
    
// Close Contact Form - Event - Cross button in form
close() {
    form.querySelector('.form-header__close').addEventListener('click', event => 
    {
        form.style.display = 'none';
    })
}

// Close Contact From with "Escape" - Keydown (Accessibility)
keyDown() {
    document.body.addEventListener('keydown', (event) => 
    {
        if(event.key === 'Escape')
        {
            event.preventDefault();
            form.style.display = 'none';
        }
    })
}
}

export default ContactForm;



