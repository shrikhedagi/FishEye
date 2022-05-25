class ContactForm 
{    
    constructor(photographer) 
    {
        this._photographer = photographer
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
                    ${this._photographer.name} 
                </h2>
                <button class="form-header__close" aria-label="Close Contact form" id="close-cross-btn">
                    <img aria-hidden="true" class="contact-button" src="./assets/icons/close.svg" alt="Fermeture de la modale"/>
                </button>
            </header>
            <form aria-hidden="true" class="contact-form sr-container" novalidate>
                 <div class="contact-form__label-input">
                    <label class="contact-form__label">Prénom</label>
                    <input type"text" class="contact-form__input" placeholder="David" aria-label="First name" id="firstName" required/>
                </div>
                <div class="contact-form__label-input">
                    <label class="contact-form__label">Nom</label>
                    <input type"text" class="contact-form__input" placeholder="Green" aria-label="Last name" id="lastName" required/>
                </div>
                <div class="contact-form__label-input">
                    <label class="contact-form__label">Email</label>
                    <input type="email" class="contact-form__input" aria-label="Email" id="email" placeholder="david-green@gmail.com" required/>
                </div>
                <div class="contact-form__label-input">
                    <label class="contact-form__label">Votre message</label>
                    <textarea cols="30" rows="10" class="text-area" aria-label="Your message" placeholder="Veuillez écrire votre message dans ce champs." id="message" required></textarea>
                </div>
                <button type="submit" class="button contact-button" id="submit" aria-label="Send" formnovalidate>Envoyer</button>
            </form>
        </div>`;

        // Close Contact Form - Event
        form.querySelector('.form-header__close').addEventListener('click', event => 
        {
            form.style.display = 'none';
        })

        // Close Contact From - Keydown
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