class ContactForm 
{    

    constructor() 
    {
        this.dom = document.getElementById('contact-form');
        this.body = document.body;
        this.openFormBtn = document.getElementById('contact-button');
        this.mainWrapper = document.getElementById('main');
        this.form = document.getElementById('contact-form');
        this.formTitle = document.getElementById('modal-title');
        this.formCloseBtn = document.querySelector('.form-header__close');
    } 

    hide() 
    {
        this.mainWrapper.setAttribute('aria-hidden', 'false')
        this.form.setAttribute('aria-hidden', 'true')
        this.body.classList.remove('no-scroll')
        this.dom.style.display = 'none';
        this.openFormBtn.focus()
    }

    show()
    {
        this.mainWrapper.setAttribute('aria-hidden', 'true')
        this.form.setAttribute('aria-hidden', 'false')
        this.body.classList.add('no-scroll')
        this.dom.style.display = 'block';
        this.formCloseBtn.focus()
    }

    // Events
    start()
    {   
        // Launch Contact Form - Event (by button click)
        this.openFormBtn.addEventListener('click', event =>
        {
            this.show();
        })    
        
        // Close Contact Form - Event - Cross button in form
        this.formCloseBtn.addEventListener('click', event => 
        {
            this.hide();
        })

        // Close Contact From with "Escape" - Keydown (Accessibility)
        this.body.addEventListener('keydown', event => 
        {
        if(event.key === 'Escape')
        {
            event.preventDefault();
            this.hide();
        }
        })

    }
    
}

export default ContactForm;



