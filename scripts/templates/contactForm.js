class ContactForm {
    constructor(photographer){
        this._name = photographer.name;
        this._id = photographer.id;
        this._location = `${photographer.city}, ${photographer.country}`;
        this._tagline = photographer.tagline;
        this._price = photographer.price;
        this._picture = `assets/photographers/photographers-id-photos/${photographer.portrait}`;
    }   

    createContactForm(){

        const contactForm = document.createElement('aside');
        contactForm.setAttribute('id', 'contact-modal');
        contactForm.classList.add('contact-form');
        contactForm.classList.add('sr-only');
        contactForm.setAttribute('role','dialog');
        contactForm.setAttribute('aria-hidden', 'false');
        
        contactForm.innerHTML  = `
            <div class="contact-form__container" role="group">
                <header class="contact-form__header">
                    <div class="contact-form__info">
                        <h2 class="contact-form__title">Contactez-moi</h2>
                        <p class="contact-form__recipient">${this._name}<p>
                    </div>
                    <button class="contact-form__close" id="close-contact-modal-button" aria-label="Close Contact form">
                        <i class="fas fa-times "></i>
                    </button>
                </header>
                <form class="contact-form__body">
                    <div class="input-group">
                        <label class="input-group__label">Prénom</label>
                        <input type="text" class="input-group__input" aria-label="First name" id="firstName" required/>
                    </div>
                    <div class="input-group">
                        <label class="input-group__label">Nom</label>
                        <input type="text" class="input-group__input" aria-label="Last name" id="lastName"/>
                    </div>
                    <div class="input-group">
                        <label class="input-group__label">Email</label>
                        <input type="email" class="input-group__input" aria-label="Email" id="email"/>
                    </div>
                    <div class="input-group">
                        <label class="input-group__label">Votre Message</label>
                        <textarea class="input-group__input--textarea"  aria-label="Your message" id="userTextArea"></textarea>
                    </div>
                    <button type="submit" class="button button-contact button-contact--small" id="contact-submit-button" aria-label="Send">Envoyer</button>
                </form>
            </div>
        `;

        // Closing Modal
        contactForm.querySelector('#close-contact-modal-button').addEventListener('click', () => {
            contactForm.classList.add('sr-only');
            contactForm.setAttribute('aria-hidden', 'true');
            contactForm.style.display='none';              
            document.querySelector('header').setAttribute('aria-hidden','false');    
            document.querySelector('main').setAttribute('aria-hidden','false');
        })

        document.body.addEventListener('keydown', (element) => {
            if(element.key === 'Escape'){
                contactForm.classList.add('sr-only');
                contactForm.setAttribute('aria-hidden', 'true');
                contactForm.style.display='none';
                document.querySelector('header').setAttribute('aria-hidden','false');    
                document.querySelector('main').setAttribute('aria-hidden','false');
            }
        })

        // Launch contact form
        return contactForm;
    }
}
