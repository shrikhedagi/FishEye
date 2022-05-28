class ContactForm 
{    

    constructor() 
    {
        this.dom = document.getElementById('contact-form')
    } 

    hide() 
    {
        this.dom.style.display = 'none';
    }

    show()
    {
        this.dom.style.display = 'block';
    }

    start()
    {   
        // Launch Contact Form - Event (by button click)
        document.getElementById('contact-button').addEventListener('click', event =>
        {
            this.show();
        })    
        
        // Close Contact Form - Event - Cross button in form
        document.querySelector('.form-header__close').addEventListener('click', event => 
        {
            this.hide();
        })

        // Close Contact From with "Escape" - Keydown (Accessibility)
        document.body.addEventListener('keydown', (event) => 
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



