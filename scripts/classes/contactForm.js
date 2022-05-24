class ContactForm 
{
    static init() {
        
        const contactButton = document.getElementById("contact-btn");
        
        contactButton.addEventListener("click", e => { 
            
            e.preventDefault();
            e.stopPropagation();

            new ContactForm();
        
        });
    }

    constructor(photographer) 
    {
        this._photographer = photographer
    } 

    renderContactForm() 
    {
        const form = document.createElement('aside');
        form.setAttribute('id', 'aside');
        form.classList.add('sr-container');
        form.classList.add('formOverlay');
        form.classList('role', 'dialog');
        form.setAttribute('aria-hidden', 'false');
        form.innerHTML = `
        <div class="form-content" aria-labelledby="dialog-headline" tabindex="-1">
            <header class="form-title">
                <h2 id="modal-title" class="form-title__heading">
                    Contactez-moi
                    <br />
                    ${this._photographer.name}
                </h2>
                <img class="contact-button" src="./assets/icons/clos.svg" alt="Fermeture de la modale">"/>
            </header>
            <form class="contact-form" novalidate>
                 <div class="contact-form__label-input">
                    <label class="contact-form__label placeholder="David">Prénom</label>
                    <input type"text" class="contact-form__input" aria-label="First name" id="firstName" required/>
                </div>
                <div class="contact-form__label-input">
                    <label class="contact-form__label" placeholder="Green">Nom</label>
                    <input type"text" class="contact-form__input" aria-label="Last name" id="lastName" required/>
                </div>
                <div class="contact-form__label-input">
                    <label class="contact-form__label">Email</label>
                    <input type="email" class="contact-form__input" aria-label="Email" id="email" placeholder="david-green@gmail.com" required/>
                </div>
                <div class="contact-form__label-input">
                    <label class="contact-form__label">Votre message</label>
                    <textarea cols="30" rows="10" class="text-area" aria-label="Your message" placeholder="Veuillez écrire votre message dans ce champs." id="message" required/>
                </div>
                <button type="submit" class="button contact-button" id="submit-button" aria-label="Send" formnovalidate>Envoyer</button>
            </form>
        </div>`;

        // Launch Contact Form
        return form;
    }
      
}

export default ContactForm;