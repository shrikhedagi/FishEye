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

        // Close Contact Form - Event - Cross button in form
        form.querySelector('.form-header__close').addEventListener('click', event => 
        {
            form.style.display = 'none';
        })

        // Close Contact From with "Escape" - Keydown (Accessibility)
        document.body.addEventListener('keydown', (event) => 
        {
            if(event.key === 'Escape')
            {
                event.preventDefault();
                form.style.display = 'none';
            }
        })

        // Launch Contact Form
        return form;
    }
      
}

/**** Open Contact Form ****/

export default ContactForm;