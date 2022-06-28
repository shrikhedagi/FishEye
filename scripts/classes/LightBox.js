class LightBox 
{   
    slides = [];
    currentIndex = 0;

    constructor(slides, index) 
    {
        this.slides = slides;
        this.currentIndex = index;
        this.body = document.body;
        this.mediaSlide = document.querySelectorAll('.lightbox-link');
        this.closeBtn = document.querySelector('.lightBox__close');
        this.lightBox = document.getElementById('lightbox');
        this.container = document.getElementsByClassName('lightBox__content')[0];
        this.start();      
    }
    
    show()
    {
        let media = this.slides[this.currentIndex];
        let html = "";
        html += media.renderLightBox();
        this.container.innerHTML = html;
        this.lightBox.style.display = "flex";
    }

     // Lightbox carousel next and previous controls event handling
    listenForMoves()
    {

        let next = document.querySelector('.lightBox__next-arrow .fa-angle-right');
        let previous = document.querySelector('.lightBox__previous-arrow .fa-angle-left');
  
        document.addEventListener("keydown", (event) => 
        {
            if(event.keyCode == 39) 
            {
                this.nextMedia();
                this.show();
            }
        });
  
        document.addEventListener("keydown", (event) => 
        {
            if(event.keyCode == 37) {
                this.previousMedia();
                this.show();
            }
        });

        next.addEventListener('click', () =>
        {
            this.nextMedia();
            this.show();
        });

        previous.addEventListener('click', () =>
        {
            this.previousMedia();
            this.show();
      });
  
    }

    listenForClose()
    {
        this.closeBtn.addEventListener('click', () =>
        {
            this.lightBox.style.display = "none";
        });
    }

    nextMedia()
    {
        if (this.currentIndex === this.slides.length -1)
        {
            this.currentIndex = 0;
        }else{
            this.currentIndex++;
        }
    }

    previousMedia()
    {
        if (this.currentIndex === 0)
        {
            this.currentIndex = this.slides.length -1;
        }else{
            this.currentIndex--;
        }
    }

    // Launch lightbox
    start()
    {
        this.show();
        this.listenForMoves();
        this.listenForClose();
        this.escape();
    }

    escape()
    {
        this.body.addEventListener('keydown', event => 
        {
        if(event.key === 'Escape')
        {
            event.stopPropagation();
            event.preventDefault();
            this.lightBox.style.display = "none";
            this.closeBtn.focus();
        }
        })
    }

}

export default LightBox;